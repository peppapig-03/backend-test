import db from "../db.js"
async function getRouterById(req, res){
    const {routerId}=req.params;
    const router = await db(Number(routerId))

    if (!router){
        res.status(404).send("Router not found")
        return
    } 
    res.send(`Router Name: ${router.name}`)
}
export {getRouterById}