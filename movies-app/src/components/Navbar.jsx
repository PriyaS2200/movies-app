import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";
import { AuthContext } from "../Context/ContextProvider";
export const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    return (
        <>
        <nav className="navbar-container">
           <div className="navbar-left">
           <NavLink to="/" className="navbar-link">Home</NavLink> 
           <NavLink to="/movies" className="navbar-link">Movies</NavLink>
           </div>
           <div className="navbar-right">
           {isAuthenticated ? 
           <button onClick={() => logout()}>Logout</button> : <button onClick={() => navigate("/login")}>Login</button>
           }
           </div>
        </nav>
        </>
    )
}