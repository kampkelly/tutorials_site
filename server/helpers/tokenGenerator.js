import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const tokenGenerator = (user) => {
    const token = jwt.sign({ user }, process.env.JWTKEY, {
        expiresIn: process.env.TOKEN_EXPIRATION
      });
    return token;
}
