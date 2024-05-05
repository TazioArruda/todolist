import { Router } from "express"
import { createCustomListController } from "../controller/custom-list-controller"
import { storageMiddleware } from "../middlewares/storage-middleware"

const customListRoutes = Router()

customListRoutes.post("/:user", storageMiddleware.single("imageBanner"), createCustomListController)
customListRoutes.delete("/:id", createCustomListController)

export {customListRoutes}