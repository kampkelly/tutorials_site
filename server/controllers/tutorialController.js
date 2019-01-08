import Model from '../models';
const { Tutorials } = Model;

export default class TutorialController {
    static createTutorial(req, res) {
        const {
            title, description, userId
          } = req.body;
          Tutorials.create({title, description, userId}).then((tutorial) => {
            res.status(201).json({
                message: 'tutorial created successfully', success: true, tutorial
              });
          })
          .catch(error => res.status(500).json(error));
    }

    static getTutorials(req, res) {
        Tutorials.findAll({
            attributes: ['title', 'description'],
            order: [
                ['id', 'desc']
            ]
        }).then((tutorials) => {
            res.status(200).json({message: 'tutorials retrieved', success: true, tutorials});
        })
        .catch(error => res.status(500).json(error));
    }
}
