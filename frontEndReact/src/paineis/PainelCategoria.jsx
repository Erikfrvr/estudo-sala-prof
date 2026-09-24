import "./PainelCategoria.css";
import categoriaService from "../services/categoriaService";
import {useState,useEffect} from "react";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

function PainelCategoria() {


    const [categorias,setCategorias]=useState([]);
    const [nomeCategoria,setNomeCategoria]=useState("");

    useEffect(()=>{
        carregarCategoria()
    },[])

    async function carregarCategoria(){
         try{
           const response = await categoriaService.listarCategorias()
           setCategorias(response)

         }catch(erro){
            alert("Erro: ",erro)

         }
    }

    async function handleRegister(e){
        e.preventDefault();
        const categoria={nome_categoria:nomeCategoria}/* Criando um Json para enviar ao backend*/

        try{
            const response=await categoriaService.criarCategoria(categoria);
            alert(response.mensagem)
           await carregarCategoria()

        }catch(erro){
            alert("Erro: ", erro)
        }

    }


    return (
        <div className="painel">

            <form className="formularioCategoria">

                <h2>Categorias</h2>

                <div className="dadosCategoria">
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        value={nomeCategoria}
                        onChange={(e)=> setNomeCategoria(e.target.value)}
                    />

                    <button type="submit" onClick={handleRegister} >
                        Cadastrar
                    </button>
                </div>

            </form>


            <div className="tabelaContainer">

                <table className="tabela">

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Categoria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {/* categorias da API */}
                        { categorias.map(
                            (dados)=>(
                                <tr id={dados.id}>
                                    <td>{dados.id}</td>
                                    <td>{dados.nome}</td>
                                    <td>
                                        <MdDelete />
                                        <GrUpdate />
                                        
                                    </td>
                                
                                </tr>

                            )
                         )}

                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PainelCategoria;