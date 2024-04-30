import { Request, Response } from "express";
import { title } from "process";
import * as yup from "yup"
import { StatusCode } from "../utils/status-codes";
import { UserRepository } from "../repositories/use-repositories";
import { CustomListRepository } from "../repositories/custom-list-repository";
import { CustomListService } from "../services/custom-list-service";

const userRepository = new UserRepository()
const customListRepository = new CustomListRepository()
const service = new CustomListService (customListRepository, userRepository)


export async function createCustomListController(req:Request, res: Response) {
    try {
        const{params, body} = req 
    const inputValidator = yup.object({
        title: yup.string().required(),
        description: yup.string().required(),
        user: yup.string().required(),
        imageBanner:yup.string().required()

    })
    const data = {...params, ...body}
    await inputValidator.validate(data)
    const result = await service.create(data)
    return res.status(StatusCode.CREATED).json(result)
}   catch (err){
        return res.status(StatusCode.BAD_REQUEST).json({message: err.message})
}
    
}