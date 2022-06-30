import { Request, Response } from "express";
import PessoaModel from "../models/pessoasModel";
import PessoasService from "../services/pessoasServices";

export default class PessoasController
{
    private pessoaService: PessoasService;

    constructor()
    {
        this.pessoaService = new PessoasService();
    }

    public index = async (req: Request, res: Response) => {
        try
        {
            const pessoa = await this.pessoaService.index();
            res.send(pessoa).json();
            return;
        }
        catch
        {
            return;
        }
    }

    public get = async (req: Request, res: Response) => {
        const { id } = req.params;

        const pessoa = await this.pessoaService.get(Number(id));
        res.send(pessoa).json();
        return;
    }

    public create = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        
        const newpessoa = await this.pessoaService.create(pessoa);
        res.send(newpessoa).json();
        return;
    }

    public update = async (req: Request, res: Response) => {
        const pessoa = req.body as PessoaModel;
        const { id } = req.params;

        const newpessoa = this.pessoaService.Update(pessoa, Number(id));
        res.send(newpessoa);
        return;
    }

    public delete = async (req: Request, res: Response) => {
        const { id } = req.params;

        const pessoa = this.pessoaService.delete(Number(id));
        res.send(pessoa);
        return;
    }
}