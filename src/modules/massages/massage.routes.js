
import { Router  } from "express"
import { massage, sendMasg } from "./massage.controller.js";



const massageRouter = Router()



massageRouter.get("/massage", massage);


massageRouter.post("/sendMasg/:id", sendMasg);




export default massageRouter