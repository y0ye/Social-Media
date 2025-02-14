import { useState } from "react";
import { Button, Input, FileInput } from "@mantine/core";
import classes from "./createpost.module.css";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [photo, setPhoto] = useState<File | null>(null);
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            

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
        } catch (err) {
            console.error("Error submitting post:", err);
        }
    };
    

    return (
        <div className={classes.postcontainer}>
            <form className={classes.post} onSubmit={handleSubmit}>
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
