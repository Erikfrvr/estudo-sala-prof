const API_URL = "http://localhost:3000/";

async function api(url, options = {}) {

    const response = await fetch(
        `${API_URL}${url}`,
        {
            headers: {
                "Content-Type": "application/json"
            },
            ...options
        }
    );

    const dados = await response.json();

    if (!response.ok) {
        throw new Error(dados.error || "Erro na requisição");
    }

    return dados;
}

export default api;