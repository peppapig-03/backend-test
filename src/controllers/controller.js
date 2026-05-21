import db from "../db/queries.js"

const getUsernames=async function(req,res){
    const usernames = await db.getAllUsernames()
    console.log("Usernames: ", usernames)
    res.send("Usernames: "+usernames.map(user=>user.username).join(", "))
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}
const controller={
    getUsernames,
    createUsernameGet,
    createUsernamePost
}
export default controller