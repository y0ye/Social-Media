import { useState } from "react";
import { Button, Input, FileInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./createpost.module.css";

import {
    useGlobalState,
} from './state';


export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [description, setDescription] = useState("");
    const [user] = useGlobalState('user');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (user.auth == true || user.username != "") {
            try {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("username", user.username);

                if (photo) {
                    console.log("Uploading photo:", photo);
                    formData.append("photo", photo, photo.name); // Ensure name is included
                } else {
                    console.error("No photo selected!");
                }

                // Debugging: Log FormData content
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}:`, value);
                }

                const response = await fetch("http://localhost:5000/posts", {
                    method: "POST",
                    body: formData,
                });

                const result = await response.json();
                console.log("Server Response:", result);
                setTimeout(() => navigate("/AuthHome"), 1000);
            } catch (err) {
                console.error("Error submitting post:", err);
            }
        }
        else{
            console.log("Server Response: Failed to authenticate user");
            setTimeout(() => navigate("/"), 1000);
        }
    };


    return (
        <div className={classes.postcontainer}>
            <form className={classes.post} onSubmit={handleSubmit}>
                <img className={classes.logincat} src= '/src/assets/images/catPost.png'></img>
                <div className={classes.toppost}>
                    <Input
                        value={title}
                        placeholder="Post Title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className={classes.middlepost}>
                    <FileInput
                        label="Upload Image"
                        description="Choose an image from your library!"
                        placeholder="img-name"
                        onChange={(File) => setPhoto(File)}
                    />
                </div>
                <div className={classes.bottompost}>
                    <Input
                        value={description}
                        placeholder="Post Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <Button type="submit">Submit Post</Button>
            </form>
        </div>
    );
}
