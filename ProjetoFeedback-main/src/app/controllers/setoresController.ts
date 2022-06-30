import { Request, Response } from "express";
import SetorModel from "../models/setoresModel";
import SetorService from "../services/setoresService";

export default class SetoresController
{
    private setorService: SetorService;

    constructor()
    {
        this.setorService = new SetorService();
    }

    public index = async (req: Request, res: Response) => {
        try
        {
            const setor = await this.setorService.index();
            res.send(setor).json();
            return;
        }
        catch
        {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        const { id } = req.params;

        const setor = await this.setorService.get(Number(id));
        res.send(setor).json();
    }

    public create = async (req: Request, res: Response) => {
        const setor = req.body as SetorModel;
        
        const newsetor = await this.setorService.create(setor);
        res.send(newsetor).json();
    }

    public update = async (req: Request, res: Response) => {
        const setor = req.body as SetorModel;
        const { id } = req.params;

        const newsetor = this.setorService.Update(setor, Number(id));
        res.send(newsetor);
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;

        const setor = this.setorService.delete(Number(id));
        res.send(setor);
    }
}