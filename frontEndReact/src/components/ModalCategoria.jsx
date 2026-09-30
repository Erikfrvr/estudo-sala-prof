import { MdMode } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import "./ModalCategoria.css";
import categoriaService from "../services/categoriaService";
import { useEffect, useState } from "react";

function ModalCategoria({ idCategoria, carregar }) {

    const [categoriaAtualizada, setCategoriaAtualizada] = useState("");

    useEffect(() => {
        setCategoriaAtualizada(idCategoria.nome || "");
    }, [idCategoria]);

    function closeModal() {
        const tagModalCategoria = document.querySelector(".modalCategoria");

        tagModalCategoria.classList.remove("open");
    }

    async function handleUpdate(e) {

        e.preventDefault();

        try {

            const valorAtualCategoria = {
                id: idCategoria.id,
                nome_categoria: categoriaAtualizada
            };

            const res = await categoriaService.atualizarCategoria(
                valorAtualCategoria
            );

            alert(res.mensagem);

            closeModal();
            carregar()

        } catch (erro) {

            console.error(erro);
            alert("Erro ao atualizar categoria");

        }
    }

    return (
        <div className="modalCategoria">

            <div className="fechar">

                <IoIosCloseCircle
                    id="close"
                    onClick={closeModal}
                />

            </div>

            <input
                type="text"
                placeholder="Nome Categoria"
                name="nome"
                id="nome_categoria"
                value={categoriaAtualizada}
                onChange={(e) =>
                    setCategoriaAtualizada(e.target.value)
                }
            />

            <button onClick={handleUpdate}>
                <MdMode />
                <span>Atualizar</span>
            </button>

        </div>
    );
}

export default ModalCategoria;