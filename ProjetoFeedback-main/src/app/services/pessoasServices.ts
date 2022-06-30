import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import PessoaModel from "../models/pessoasModel";

export default class PessoasService
{
    private pessoasRepository : Repository<PessoaModel>;

    constructor()
    {
        this.pessoasRepository = AppDataSource.getRepository(PessoaModel);
    }

    public index = async () => 
    {
        const pessoas = await this.pessoasRepository.find({
            relations: {
                setor : true,
            },
        });
        return pessoas;
    }
    public get = async (idGet:number) => 
    {
        const pessoas = await this.pessoasRepository.find({
            where: {
                id: idGet,
            },
            relations: {
                setor : true,
            },
        });
        return pessoas;
    }

    public create = async (pessoa : PessoaModel) => 
    {
        const newpessoa = await this.pessoasRepository.insert(pessoa);
        return newpessoa;
    }

    public Update = async (pessoa : PessoaModel, id: number) => 
    {
        const newpessoa = await this.pessoasRepository.update(id, pessoa);
        return newpessoa;
    }

    public delete = async (id: number) => 
    {
        const newpessoa = await this.pessoasRepository.delete(id);
        return newpessoa;
    }
}