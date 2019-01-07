import express from 'express';
import TutorialController from '../controllers/tutorialController';
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Success'
    });
});

router.post('/create/tutorial', TutorialController.createTutorial);

export default router;