const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const aws = require("./s3Use");
const multer = require("multer");

app.use(cors());
app.use(express.json());

// Set up Multer for file uploads (temporary storage before S3)
const upload = multer({ dest: "uploads/" });

// Create a post with image upload
app.post("/posts", upload.single("photo"), async (req, res) => {
    try {
        const { title, description } = req.body;
        const file = req.file;

        if (!file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload file to AWS S3
        const awslink = await aws.uploadFileToAwsS3({
            fileName: file.originalname,
            filePath: file.path,
        });

        console.log(awslink);


        // Insert into database with AWS S3 file URL
        const newPost = await pool.query(
            "INSERT INTO post (title, description, awslink) VALUES($1, $2, $3) RETURNING *",
            [title, description, awslink]
        );

        res.json(newPost.rows[0]); // Return the created post
    } catch (err) {
        console.error("Error creating post:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
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

        res.json(post.rows);
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
        const updatePost = await pool.query(
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

app.post("/users/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        // Query the database to check if the user exists
        const userQuery = await pool.query(
            "SELECT username, password FROM users WHERE username = $1",
            [username]
        );

        // If user does not exist
        if (userQuery.rows.length === 0) {
            return res.status(401).json({ error: "User not found" });
        }

        const user = userQuery.rows[0];

        // Check if password matches (assuming plain text for now)
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }

        res.json({ message: "Login successful", user: { username: user.username } });

    } catch (err) {
        console.error("Error logging in user:", err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/users", async (req, res) => {
    try{
        const { username, password } = req.body;

        const newUser = await pool.query(
            "INSERT INTO users (username, password) VALUES($1, $2)",
            [username, password]
        );

        return res.json(newUser.rows[0]); // Return the created post
    } catch (err) {
        console.error("Error creating user:", err.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
})




//server listening
app.listen(5000, () => {
    console.log("Server started");
});