import { InputCreateCustomDTO } from "../dto/creat-custom-list-dto";
import { CustomListModel } from "../entities/list";


export class CustomListRepository {

    async create(input: InputCreateCustomDTO){
        const customList = await CustomListModel.create(input)
        return customList
    }
}