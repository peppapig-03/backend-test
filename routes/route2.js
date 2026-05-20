import {Router} from "express"
const router2=Router()
router2.get("/", (req, res)=>res.send("ALL ROUTE 2s"))
router2.get("/:router", (req, res)=>{
    const routerId=req.params.router
    res.send(`Router2 ID: ${routerId} `)
})

export default router2