import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import imgLogin from "../assets/img_login_1.svg";
import "./Login.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")
    const navegation=useNavigate()

    function handleCadastrar(e){
            navegation("/cadastrar")
    
    }

    return(
        <div className="containerLogin">
        <img src={imgLogin} alt="Imagem de Login azul" />
        <div className="formularioLogin">
            <div className="inputLogin">
                 <MdAlternateEmail className="iconViewLogin" />
                <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
            </div>

            <div className="inputLogin">
                 <RiLockPasswordLine className="iconViewLogin" />
                <input type="password" name="password" id="password"  value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </div>


                <button>Entrar</button>
        </div>

        <p   onClick={handleCadastrar} className="textoLink">Cadastrar um novo usuario</p>
        </div>
    )
}


export default Login;
