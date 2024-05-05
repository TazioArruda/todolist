import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

import { InputLoginDTO, OutputLoginDTO } from "../dto/login-dto";
import { UserRepository } from "../repositories/use-repositories";





export class AuthService {
    constructor(private userRepository: UserRepository){}

    async login(params: InputLoginDTO): Promise<OutputLoginDTO>{
    // 1. Buscar o usuário pelo email no banco de dados 
    // 2. Comparar a senha que o usuário enviou com a senha do banco de dados 
    // 3. Gerar token 
        /////// ---------> Buscar o usuário pelo email no banco de dados <---------- \\\\\\\\\\\\\\\\\\\\\\\\
    const user = await this.userRepository.getByEmail(params.email)
    if(!user){
        throw new Error("Invalid e-mail/password")
    }

       /// ---------> Comparar a senha que o usuário enviou com a senha do banco de dados<---------- \\\\\\\
    const passwordIsValid = await bcrypt.compare(params.password, user.password as string)
        if(!passwordIsValid){
            throw new Error("Invalid e-mail/password")
        }

        //  ------------> Gerar token <----------------------------------------  
        /**
         * payload -> informações que são colocadas na credencial 
         * secretkey -> assinatura ela informa se essa credencial é valida ou não
         * options -> são opções extras, tempo de expiração o que é mais usual 
         */
        const token = jwt.sign({
            id: user.id, fullname: user.fullname},
            process.env.SECRET_KAY as string,
            { expiresIn: "5m"}
            )
            return {token}
        }
    }
