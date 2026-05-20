import express, { urlencoded } from "express"
import router from "./routes/users.js"
const app=express()
app.use(express.static("public"))
app.use(express.urlencoded({ extended:true}))
app.set("view engine", "ejs")
app.listen(3000)
app.get("/", (req,res)=>{
    console.log("Here")
    res.render("index", {text2: "World"})
})

app.use("/users", router)