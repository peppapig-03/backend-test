import express from "express"
import router from "./routes/route1.js"
const app=express()
app.use("/routers",router)
const PORT = 4000
app.listen(PORT, (error)=>{
    if (error){
        throw error
    }
    console.log(`First Express app - listen on port ${PORT}`)
})