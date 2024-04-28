import {Request, Response} from "express";
import * as yup from "yup"

async function createUserController (req: Request, res: Response){
    const {body} = req
    const bodyValidator = yup.object({
        email:yup.string().email(),
        fullname: yup.string().min(2),   
        password:yup.string().min(6).max(8)
    })

}