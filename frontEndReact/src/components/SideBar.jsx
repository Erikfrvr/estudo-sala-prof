import { FaBox } from "react-icons/fa";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"
function SideBar(){

    const navegation=useNavigate()
    function handleChangeRoute(e){

        switch(e.target.innerText){
            case "Produto":
                navegation("")
                break;
            case "Categoria":
                navegation("categoria")
                break;
            case "Usuario":
                navegation("usuario")
                break;
        }
        
    }

    return(
        <div className="sideBar">
            <ul>
                <li id="prdouto" onClick={handleChangeRoute} ><FaBox /> <p>Produto</p></li>
                <li id="categoria" onClick={handleChangeRoute}  ><BiSolidCategoryAlt /><p>Categoria</p></li>
                <li id="usuario" onClick={handleChangeRoute}   ><IoPersonCircleOutline /><p>Usuario</p> </li>
            </ul>
        
        </div>
    )
}

export default SideBar;