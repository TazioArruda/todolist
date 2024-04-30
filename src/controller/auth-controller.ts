import { Request, Response } from "express"
import * as yup from "yup"
import { AuthService } from "../services/auth-service"
import { UserRepository } from "../repositories/use-repositories"
import { StatusCode } from "../utils/status-codes"

const repopository = new UserRepository()
const service = new AuthService(repopository)

export async function loginController (req: Request, res: Response){
    try {

        const {body} = req
        const bodyValidator = yup.object({
            email:yup.string().email().required(),
            password: yup.string().min(6).max(8)
        })

        await bodyValidator.validate(body)
        const result = await service.login(body)
        return res.status(StatusCode.OK).json(result)
    } catch(err){
        return res.status(StatusCode.BAD_REQUEST).json({ message: err.message})
    }
}
