import pool from "./pool.js"

const getAllUsernames=async function(){
    const {rows}=await pool.query("SELECT * FROM usernames")
    return rows
}

const insertUsername=async function(username){
    await pool.query("INSERT INTO usernames (username) VA:UES ($1)", [username])
}

const query={
    getAllUsernames,
    insertUsername
}
export default query