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
        const newPost = await pool.query(
            "INSERT INTO post (description) VALUES($1) RETURNING *",
            [description]
        );

        res.json(newPost.rows[0]);
    }
    catch (err){
        console.log(err.message);
    }
});

//get all posts
app.get("/posts", async (req,res) =>{
    try{
        const allPosts = await pool.query(
            "SELECT * FROM post"
        );

        res.json(allPosts.rows);
    }
    catch (err){
        console.log(err.message);
    }
})

//get a post
app.get("/posts/:id", async (req,res) =>{
    try{
        const {id} = req.params;
        const post = await pool.query(
            "SELECT * FROM post WHERE post_id = $1",
             [id]
        );

        res.json(post.rows[0]);
    }
    catch (err){
        console.log(err.message);
    }
})

//update a post
app.put("/posts/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo = await pool.query(
            "UPDATE post SET description = $1 WHERE post_id = $2",
            [description, id]
        );

        res.json("Post updated!");
    }
    catch (err){
        console.log(err.message);
    }
})

//delete a post
app.delete("/posts/:id", async (req, res) =>{
    try{
        const {id} = req.params;
        const deletePost = await pool.query(
            "DELETE FROM post WHERE post_id = $1",
            [id]);

        res.json("Post deleted!");
    }
    catch (err){
        console.log(err.message);
    }
})

//server listening
app.listen(5000, () => {
    console.log("Server started");
});