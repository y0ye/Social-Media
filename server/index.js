const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middle ware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a post

app.post("/posts", async (req,res) => {
    try{
        const{description} = req.body;
        const newPost = await pool.query("INSERT INTO post (description) VALUES($1)",
            [description])
        console.log(req.body);

        res.json(newPost);

    }
    catch (err){
        console.log(err.message);
    }
})

//get all posts

//get a post

//update a post

//delete a post

app.listen(5000, () => {
    console.log("Server started");
});