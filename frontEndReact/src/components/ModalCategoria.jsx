import { MdMode } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";
import "./ModalCategoria.css";
function ModalCategoria(){
    return(
        <div className="modalCategoria">
            <div className="fechar">
                <IoIosCloseCircle  id="close" />
            </div>

            <input type="text" placeholder="Nome Categoria" name="nome" id="nome_categoria"  />
            <button><MdMode/><span>Atualizar</span></button>
        </div>

    );
};

export default ModalCategoria;