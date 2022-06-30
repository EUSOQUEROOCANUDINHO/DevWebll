import { Request, Response } from "express";
import FeedbackModel from "../models/feedbacksModel";
import FeedbackService from "../services/feedbacksService";

export default class FeedbacksController
{
    private feedbackService: FeedbackService;

    constructor()
    {
        this.feedbackService = new FeedbackService();
    }

    public index = async (req: Request, res: Response) => {
        try
        {
            const feedback = await this.feedbackService.index();
            res.send(feedback).json();
            return;
        }
        catch
        {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        const { id } = req.params;

        const feedback = await this.feedbackService.get(Number(id));
        res.send(feedback).json();
    }

    public create = async (req: Request, res: Response) => {
        const feedback = req.body as FeedbackModel;
        
        const newFeedback = await this.feedbackService.create(feedback);
        res.send(newFeedback).json();
    }

    public update = async (req: Request, res: Response) => {
        const feedback = req.body as FeedbackModel;
        const { id } = req.params;

        const newFeedback = this.feedbackService.Update(feedback, Number(id));
        res.send(newFeedback);
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;

        const feedback = this.feedbackService.delete(Number(id));
        res.send(feedback);
    }
}