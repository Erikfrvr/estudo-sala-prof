import "./PainelCategoria.css";
import categoriaService from "../services/categoriaService";
import {useState,useEffect} from "react";
import { MdDelete,MdMode } from "react-icons/md";
import ModalCategoria from "../components/ModalCategoria";


function PainelCategoria() {


    const [categorias,setCategorias]=useState([]);
    const [nomeCategoria,setNomeCategoria]=useState("");
    const [idEditando,setIdEditando]=useState(null);
    const [nomeEditando,setNomeEditando]=useState("");

    function handleEditar(dados){
        setIdEditando(dados.id)
        setNomeEditando(dados.nome)
    }

    function fecharModal(){
        setIdEditando(null)
        setNomeEditando("")
    }

    async function handleAtualizar(){
        if(!idEditando){
            alert("Clique no lápis de uma categoria para editar")
            return
        }
        const categoria={nome_categoria:nomeEditando}

        try{
            const response=await categoriaService.atualizarCategoria(idEditando, categoria);
            alert(response.mensagem)
            fecharModal()
            await carregarCategoria()

        }catch(erro){
            alert(erro.message)
        }
    }


    async function handelDelete(id) {
        try{
            const response= await categoriaService.deletarCategoria(id);
            alert(response.mensagem)
            await carregarCategoria();

        }catch(erro){
            alert(erro.message)
        }
        
    }

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
            setNomeCategoria("")
           await carregarCategoria()

        }catch(erro){
            alert(erro.message)
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

                    <button type="submit"  onClick={handleRegister} >
                        Cadastrar
                    </button>
                </div>

            </form>

            <ModalCategoria
                nome={nomeEditando}
                setNome={setNomeEditando}
                onAtualizar={handleAtualizar}
                onFechar={fecharModal}
            />

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
                                <tr key={dados.id}>
                                    <td>{dados.id}</td>
                                    <td>{dados.nome}</td>
                                    <td className="acoes">
                                        <MdDelete className="deletar" onClick={() => handelDelete(dados.id)} />
                                        <MdMode className="atualizar" onClick={() => handleEditar(dados)} />
                                        
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