import {Router} from "express"
import {getAuthorById} from "../controllers/routerController"
const router=Router()
router.get("/:routerId", (req,res)=>res.send(req.params.routerId))

export default router