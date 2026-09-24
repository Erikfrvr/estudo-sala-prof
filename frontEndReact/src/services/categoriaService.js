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

export default {listarCategorias,criarCategoria};