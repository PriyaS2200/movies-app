import { useState,useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/ContextProvider";
import "../styles/Login.css";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useContext(AuthContext)
    const handleLogin = async(e) => {
        e.preventDefault();
        try {
            let response = await axios.post("https://canyon-grizzled-reason.glitch.me/login",{
                username,
                password,
            },
        );
            console.log(response)
            if(response.data.success) {
                console.log(response.data.token);
                login(response.data.token)
            }
        }catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
        <h1 className="login-title">Login </h1>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="Enter username"
             value={username} onChange={(e) => setUsername(e.target.value)}/>
             <input type="password" placeholder="Enter password"
             value={password} onChange={(e) => setPassword(e.target.value)}/>
             <input type="submit" value="Login" />
        </form>
        </div>
    )
}