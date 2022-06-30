import { Repository } from "typeorm";
import AppDataSource from "../../database/data-source"
import SetorModel from "../models/setoresModel";

export default class SetorService
{
    private setorRepository : Repository<SetorModel>;

    constructor()
    {
        this.setorRepository = AppDataSource.getRepository(SetorModel);
    }

    public index = async () => 
    {
        const setores = await this.setorRepository.find();
        return setores;
    }
    public get = async (idGet:number) => 
    {
        const setores = await this.setorRepository.find({
            where: {
                id: idGet,
            },
        });
        return setores;
    }

    public create = async (setor : SetorModel) => 
    {
        const newSetor = await this.setorRepository.insert(setor);
        return newSetor;
    }

    public Update = async (setor : SetorModel, id: number) => 
    {
        const newSetor = await this.setorRepository.update(id, setor);
        return newSetor;
    }

    public delete = async (id: number) => 
    {
        const newSetor = await this.setorRepository.delete(id);
        return newSetor;
    }
}