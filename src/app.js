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
        const result=await pool.query("SELECT * from emails")
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
const add=async function(email){
    try{
        const result=await pool.query(`INSERT INTO emails(emailAddress) VALUES ('${email}')`)
        console.log("write success")
    } catch(error){
        console.log("write fail")
    }
}
const delet=async function(email){
    try{
        const result=await pool.query(`DELETE FROM emails WHERE emailAddress= '${email}'`)
        console.log("Delete Success")
    } catch(error){
        console.log("Delete Failed")
    }
}
add("gmail@gmai")