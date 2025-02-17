import { useState } from "react";
import { Button, Input } from "@mantine/core";
import classes from "./login.module.css";
import { useNavigate } from "react-router-dom";
import {
    setCurrentUser,
    setAuth,
} from './state';

export default function Login() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus(""); // Clear any previous errors before submitting

        try {
            const response = await fetch("http://localhost:5000/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const result = await response.json();

            console.log(result);

            if (result.message === "Login successful") {
                setStatus("Success"); // Show the correct error message
                setCurrentUser(username);
                setAuth(true);
                setTimeout(() => navigate("/AuthHome"), 1000);
            }

            else {
                setStatus("User does not exist or invalid password!"); // Show the correct error message
                setTimeout(() => navigate("/"), 1000);
            }

        } catch (err) {
            setStatus("Fail"); // Show the correct error message
            console.error("Error submitting post:", err);
        }
    };

    return (

        <div className={classes.logincontainer}>
            <form className={classes.login} onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className={classes.inputarea}>
                    <div className={classes.username}>
                    <img className={classes.logincat}src="/src/assets/images/catLogin.png"></img>
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
                <Button type="submit">Login</Button>

                {/* Display error message if it exists */}
                {status && <p className={classes.status}>{status}</p>}
            </form>
        </div>
    );
}
