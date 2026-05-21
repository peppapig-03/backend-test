import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import pool from "./db/pool.js"

dotenv.config()

const app=express()

app.use(cors())
app.use(express.urlencoded({ extended:true}))
app.use(express.json())

app.get("/", (req, res) => {
  res.send("API running")
})

app.get("/users", async(req,res)=>{
    try{
        const result=await pool.query("SELECT * from users")
        res.json(result.rows)
    } catch (error){
        console.error(error)
        res.status(500).json({
            error:"Database query failed"
        })
    }
})
app.listen(process.env.PORT,()=>{
    console.log("Server Starts")
})
