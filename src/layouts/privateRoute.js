import { Navigate,Outlet } from "react-router-dom";

function PrivateRoute(props){
    return props.isLogged?<Outlet/>:<Navigate to ="/login" />
}

export default PrivateRoute;