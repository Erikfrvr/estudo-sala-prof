
import "./PainelProduto.css"
function PainelProduto(){
    return(
        <div className="tabela">
        <form className="formularioPainel">
            <h2>Produtos</h2>
            <div className="dadosProduto">
                <input type="text" placeholder="Nome do Produto" id="nome" />
                <input type="text" placeholder="Descrição" id="descricao"  />
                <input type="number" placeholder="Valor"  id="valor"/>
                <input type="date" name="data" id="data" />
                <select  id="categoria">
                    <option value="">escolha uma Categoria</option>
                    <option value="categoria1">categoria 1</option>
                    <option value="categoria2">categoria 2</option>
                    <option value="categoria3">categoria 3</option>
                    <option value="categoria4">categoria 4</option>
                </select>
            </div>
            <button>Cadastrar</button>
        </form>

        <div className="tabelaContainer">

<table className="tabelaProduto">

    <thead>
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Categoria</th>
            <th>Ações</th>
        </tr>
    </thead>

    <tbody>
        {/* Os produtos vindos da API entrarão aqui */}
    </tbody>

</table>

</div>

        </div>
    );
}

export default PainelProduto;