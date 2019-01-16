import express from 'express';
import TutorialController from '../controllers/tutorialController';
import UserController from '../controllers/userController';
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Success'
    });
});

router.get('/tutorials', TutorialController.getTutorials);
router.post('/create/tutorial', TutorialController.createTutorial);
router.get('/tutorials/:id', TutorialController.showTutorial);
router.put('/tutorials/:id/edit', TutorialController.editTutorial);

router.post('/signup_user', UserController.signgupUser);
router.post('/signin_user', UserController.signginUser);
router.get('/users', UserController.retrieveUsers);
router.get('/users/:id', UserController.retrieveOneUser);

export default router;
