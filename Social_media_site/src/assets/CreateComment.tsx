import { useState } from "react";
import { Button, Input } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./createcomment.module.css";

import {
    setFocus,
    useGlobalState,
} from './state';


export default function CreateComment() {
    const [message, setMessage] = useState<string>("");
    const [user] = useGlobalState('user');
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (user.auth == true) {
            try {

                const user_id = user.username;
                const post_id = user.postFocus;

                const response = await fetch("http://localhost:5000/comments", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message, user_id, post_id }),
                });
    
                const result = await response.json();

                console.log("Server Response:", result);
                setFocus(0);
                setTimeout(() => navigate("/AuthHome"), 1000);
            } catch (err) {
                console.error("Error creating comment:", err);
            }
        }
        else{
            console.log("Server Response: Failed to authenticate user or post");
            setTimeout(() => navigate("/"), 1000);
        }
    };


    return (
        <div className={classes.commentcontainer}>
            <form className={classes.comment} onSubmit={handleSubmit}>
                <div className={classes.bottomcomment}>
                    <Input
                        value={message}
                        placeholder="Enter Comment"
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button type="submit">Submit Comment</Button>
            </form>
        </div>
    );
}
