import {rm} from "fs/promises"
import {join} from "path"

import { InputCreateCustomDTO } from "../dto/creat-custom-list-dto";
import { RemoveCustomListDTO } from "../dto/remove-custom-list-dto";
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

    async destroy(input: RemoveCustomListDTO){
       // const customList = await this.customListRepository.getById(input.id)
        //if(!customList) throw new Error ("Custom list not found")
        //    await this.customListRepository.remove(input.id)
        // remover arquivo da pasta uploads 
        //await rm()
        const imageBannerPath = join(".")
        return imageBannerPath 
    }
}