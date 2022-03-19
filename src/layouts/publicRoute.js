import { Navigate,Outlet } from "react-router-dom";

function PublicRoute(props){
    return props.isLogged?<Navigate to ="/home"/>:<Outlet/>
}

export default PublicRoute;