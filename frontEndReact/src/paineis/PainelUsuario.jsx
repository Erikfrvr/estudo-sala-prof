import "./PainelUsuario.css";

function PainelUsuario() {

    return (

        <div className="painel">

            <form className="formularioUsuario">

                <h2>Usuários</h2>

                <div className="dadosUsuario">

                    <input
                        type="text"
                        placeholder="Nome"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                    />

                    <input
                        type="password"
                        placeholder="Senha"
                    />

                    <button type="submit">
                        Cadastrar
                    </button>

                </div>

            </form>


            <div className="tabelaContainer">

                <table className="tabela">

                    <thead>

                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Email</th>
                            <th>Ações</th>
                        </tr>

                    </thead>

                    <tbody>
                        {/* usuários vindos da API */}
                    </tbody>

                </table>

            </div>

        </div>
    );
}

export default PainelUsuario;