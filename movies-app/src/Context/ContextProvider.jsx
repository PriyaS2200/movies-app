import { useState, createContext } from "react"
import { useNavigate, useLocation } from "react-router-dom";

export const AuthContext = createContext();
export const ContextProvider = ({children}) => {
    const [isAuthenticated,setIsAuthenticated] = useState(localStorage.getItem("token") ? true : false)
    const [token,setToken] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const login = (token) => {
        console.log(token, "login");
        setIsAuthenticated(true);
        setToken(token);
        localStorage.setItem("token",token);
        alert("Login successful!");
        navigate( location.state.from);
    }

    const logout = () => {
        setIsAuthenticated(false);
        setToken(null);
        localStorage.removeItem("token");
        navigate("/login");
    }

    return (
        <AuthContext.Provider value={{login, logout ,isAuthenticated}} >
            {children}
        </AuthContext.Provider>
    )
}