import bcrypt from 'Bcrypt';
import Model from '../models';
import { tokenGenerator } from '../helpers/tokenGenerator';
const { User } = Model;
const saltRounds = 10;

export default class UserController {
    static signgupUser(req, res) {
        const { name, email, password } = req.body;
        bcrypt.hash(password, saltRounds)
            .then(hashedPassword => User.create({
                name, email, password: hashedPassword
            })
                .then((user) => {
                    const userInfoWithoutPassword = Object.assign({}, { name: user.name, email: user.email });
                    const token = tokenGenerator(userInfoWithoutPassword);
                    res.status(201).json({ message: 'user has been created successfully', success: true, user: userInfoWithoutPassword, token })
                })
                .catch(error => res.status(409).json({ message: error, status: false })));
    }
   
    static signginUser(req, res) {
        const { email, password } = req.body;
        User.findOne({ where: { email } })
            .then((user) => {
                if (user) {
                    if (bcrypt.compareSync(password, user.password)) {
                        const userInfoWithoutPassword = Object.assign({}, { name: user.name, email: user.email });
                        const token = tokenGenerator(userInfoWithoutPassword);
                        res.status(200).json({ message: 'logged in successfully', status: true, user: userInfoWithoutPassword, token });
                    } else {
                        res.status(401).json({ message: 'wrong email/password', status: false });
                    }
                } else {
                    res.status(401).json({ message: 'wrong email/password', status: false });
                }
            })
            .catch(error => res.status(400).json({ message: error, status: false }));
    }
}
