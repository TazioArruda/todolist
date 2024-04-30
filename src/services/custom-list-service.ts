import { InputCreateCustomDTO } from "../dto/creat-custom-list-dto";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { UserRepository } from "../repositories/use-repositories";


export class CustomListService{
    constructor(
        private customListRepository: CustomListRepository, 
        private userRepository:UserRepository
    ){}

    async create(input: InputCreateCustomDTO){
        const user = await this.userRepository.getById(input.user)
        if(!user){
            throw new Error ("User not found")
        }
        const customList = await this.customListRepository.create(input)
        return customList

    }
}