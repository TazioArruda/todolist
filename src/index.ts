import "dotenv/config"
import express from "express"

import {Database} from "./database/connection"
Database.initialize()

const port = process.env.PORT || 3333

const server = express()


server.listen(port, () =>{
    console.log("Server is running at http://localhost:" + port)
})
