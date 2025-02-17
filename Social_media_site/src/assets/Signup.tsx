import { useState } from "react";
import { Button, Input } from "@mantine/core";
import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const navigate = useNavigate();


    const handleSubmit = async (e: any) => {
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
                setTimeout(() => navigate("/AuthHome"), 1000);
            }

            else {
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
                <h2>Sign Up</h2>
                <div className={classes.inputarea}>
                    <div className={classes.username}>
                    <img className={classes.logincat}src="/src/assets/images/catSignup.png"></img>
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
                    </div>
                    <Button type="submit">Sign Up</Button>

                    {/* Display error message if it exists */}
                    {error && <p className={classes.status}>{error}</p>}
            </form>
        </div>
    );
}
