import { useState } from "react";
import { Button, Input } from "@mantine/core";
import classes from "./login.module.css";

export default function Signup() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e:any) => {
        e.preventDefault();
        setError(""); // Clear any previous errors before submitting

        try {
            const response = await fetch("http://localhost:5000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const result = await response

            if (response.ok) {
                console.log("User successfully created:", result);
                setUsername("");  // Clear username input
                setPassword("");  // Clear password input
                setError("Success");     // Clear error message
            }

            else{
                setError("Server Error or User Exists"); // Show the correct error message
            }
        } catch (err) {
            setError("Server Error or User Exists"); // Show the correct error message
            console.error("Error submitting post:", err);
        }
    };

    return (
        <div className={classes.logincontainer}>
            <form className={classes.login} onSubmit={handleSubmit}>
                <div className={classes.username}>
                    <Input
                        value={username}
                        placeholder="Enter Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className={classes.password}>
                    <Input
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Button type="submit">Sign Up</Button>

                {/* Display error message if it exists */}
                {error && <p className={classes.error}>{error}</p>}
            </form>
        </div>
    );
}
