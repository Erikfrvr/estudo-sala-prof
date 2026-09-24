import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoChevronBackCircle } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CadastrarUsuario.css"

function CadastrarUsuario(){

    const navegation=useNavigate()

    function handleVoltar(e){
        navegation("/")
    }

    const [nome,setNome]=useState("");
    const [email,setEmail]=useState("");
    const [senha,setSenha]=useState("");

    console.log("O valor de nome: ",nome)
    return(
        <div className="containerCadastrarUsuario">
            <form>
                <div className="inputCadastrarUsuario">
                    <MdDriveFileRenameOutline className="iconCadastrar" />

                    <input
                     type="text" 
                     placeholder="Nome" 
                     value={nome}
                     onChange={(v)=> setNome(v.target.value)
                     }
                     />
                </div>

                <div className="inputCadastrarUsuario">
                    <MdAlternateEmail  className="iconCadastrar" />
                    <input 
                    type="email"
                     placeholder="Email"
                     value={nome}
                     onChange={(e)=> setEmail(e.target.value)}
                     />
                </div>

                <div className="inputCadastrarUsuario">
                    <RiLockPasswordLine className="iconCadastrar"  />
                    <input 
                    type="password" 
                    placeholder="Senha"
                    value={senha}
                    onChange={(e)=> setSenha(e.target.value)} 
                    />
                </div>

                <div className="navegacaoCadastrarUsuario">
                    <IoChevronBackCircle className="voltar"  onClick={handleVoltar} />
                    <button type="submit">Cadastrar</button>
                </div>
               

            </form>

        
        </div>
    )

}


export default CadastrarUsuario;
