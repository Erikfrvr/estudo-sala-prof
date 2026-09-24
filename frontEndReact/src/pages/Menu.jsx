import SideBar from "../components/SideBar";
import "./Menu.css";
import { Outlet } from "react-router-dom";

function Menu(){
    return(
        <div className="containerMenu">
            <SideBar/>
            <div className="paineis">
                    <Outlet/>
            </div>

        </div>

    )
}

export default Menu;