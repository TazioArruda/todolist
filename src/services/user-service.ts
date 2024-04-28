import { ParamsCreateUserDTO } from "../dto/create-user-dto";
import bcrypt from "bcrypt"


export class UserService {

    constructor(private repository: any){}

    async create(params: ParamsCreateUserDTO){
        // verificar se o email existe 

        const userAlreadyExists = await this.repository.getByEmail(params)
        if (userAlreadyExists){
            // lançar erro 

            throw new Error("User already exists")

        }
        const payload = {
            ...params,
            password: await bcrypt.hash(params.password, 8)

        }

        await this.repository.create(payload)

        // criptografar a senha 



}
}