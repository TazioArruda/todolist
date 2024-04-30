import { Router } from "express"
import { createUserController } from "../controller/user-controller"

const userRoutes = Router()

userRoutes.post("/", createUserController)

export {userRoutes}