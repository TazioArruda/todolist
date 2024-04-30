import {Router} from "express"
import { userRoutes } from "./user-route"
import { authRoutes } from "./auth-route"

const routes = Router()

routes.use("/users", userRoutes)
routes.use("/auth", authRoutes)

export {routes}