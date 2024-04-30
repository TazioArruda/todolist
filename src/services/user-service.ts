import { ParamsCreateUserDTO } from "../dto/create-user-dto";
import bcrypt from "bcrypt"
import { UserRepository } from "../repositories/use-repositories";


export class UserService {

    constructor(private repository: UserRepository){}

    async create(params: ParamsCreateUserDTO){
        // verificar se o email existe 

        const userAlreadyExists = await this.repository.getByEmail(params.email)
        if (userAlreadyExists){
            // lançar erro 

            throw new Error("User already exists")

        }
        const payload = {
            ...params,
            password: await bcrypt.hash(params.password, 8)

        }

        const user = await this.repository.create(payload)
        return user
        // criptografar a senha 



}
}