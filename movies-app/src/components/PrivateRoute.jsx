import { useContext } from "react"
import { AuthContext } from "../Context/ContextProvider"
import { Navigate, useLocation, useNavigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
    if(isAuthenticated == false){
        return <Navigate to="/login" state={{from:location}} />;
    }
    return children;
}