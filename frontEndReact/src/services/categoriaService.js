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

async function atualizarCategoria(id, categoria){
    return await api(`api/categorias/${id}`, {
        method: "PUT",
        body: JSON.stringify(categoria)
    });
}

export default {listarCategorias,criarCategoria,deletarCategoria,atualizarCategoria};