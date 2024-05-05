import { InputCreateCustomDTO } from "../dto/creat-custom-list-dto";
import { CustomListModel } from "../entities/list";


export class CustomListRepository {

    async create(input: InputCreateCustomDTO){
        const customList = await CustomListModel.create(input)
        return customList
    }

    async getById(id: string){
        const customList = await CustomListModel.findById(id)
        return customList
    }

    async remove(id: string){
        await CustomListModel.deleteOne({id})
    }
}