import feedback from 'express';
import FeedbacksController from '../controllers/feedbacksController';
const feedbacksRouter = feedback.Router();
const feedbacksController = new FeedbacksController();

feedbacksRouter.get("/feedbacks", feedbacksController.index);

feedbacksRouter.get("/feedbacks/:id", feedbacksController.get);

feedbacksRouter.post("/feedbacks", feedbacksController.create);

feedbacksRouter.delete("/feedbacks/:id", feedbacksController.delete);

export const FeedbacksRouter = feedbacksRouter;