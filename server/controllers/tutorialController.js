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
    
    static editTutorial(req, res) {
        Tutorials.findOne({
            where: { 'id': req.params.id },
        }).then((tutorial) => {
            if (tutorial) {
                tutorial.update(req.body)
                .then((updatedTutorial) => {
                    res.status(200).json({message: 'tutorial updated successfully', success: true, updatedTutorial})
                })
                .catch(error => res.status(500).json(error));
            } else {
                res.status(404).json('tutorial cannot be found');
            }
        })
        .catch(error => res.status(500).json(error));
    }
}
