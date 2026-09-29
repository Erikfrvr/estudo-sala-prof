import { MdMode } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import "./ModalCategoria.css";
function ModalCategoria({ nome, setNome, onAtualizar, onFechar }) {
  return (
    <div className="modalCategoria">
        <div className="fechar">
            <FaWindowClose onClick={onFechar} />
        </div>
      <input
        type="text"
        placeholder="Nome da Categoria"
        name="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <button type="button" onClick={onAtualizar}><MdMode/>Atualizar</button>
    </div>
  );
}
export default ModalCategoria;
