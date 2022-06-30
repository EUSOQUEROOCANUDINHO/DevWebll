import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import FeedbackModel from "../models/feedbacksModel";

export default class FeedbackService
{
    private feedbackRepository : Repository<FeedbackModel>;

    constructor()
    {
        this.feedbackRepository = AppDataSource.getRepository(FeedbackModel);
    }

    public index = async () => 
    {
        const feedbacks = await this.feedbackRepository.find({
            relations: {
                avaliado : true,
            },
        });
        return feedbacks;
    }
    public get = async (idGet:number) => 
    {
        const feedbacks = await this.feedbackRepository.find({
            where: {
                id: idGet,
            },
            relations: {
                avaliado : true,
            },
        });
        return feedbacks;
    }

    public create = async (feedback : FeedbackModel) => 
    {
        const newFeedback = await this.feedbackRepository.insert(feedback);
        return newFeedback;
    }

    public Update = async (feedback : FeedbackModel, id: number) => 
    {
        const newFeedback = await this.feedbackRepository.update(id, feedback);
        return newFeedback;
    }

    public delete = async (id: number) => 
    {
        const newFeedback = await this.feedbackRepository.delete(id);
        return newFeedback;
    }
}