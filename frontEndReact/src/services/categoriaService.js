import api from "./api";

async function listarCategorias(){

   return await api("api/categorias")
}

async function criarCategoria(categoria) {
    return await api("api/categorias",{
        method:'POST',
        body: JSON.stringify(categoria)
    })
}

async function deletarCategoria(id){
    return await api(`api/categorias/${id}`, {
        method: "DELETE"
    });
}

export default {listarCategorias,criarCategoria,deletarCategoria};