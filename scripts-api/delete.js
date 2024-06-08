function excluirMaquina(maquinaId) {
    axios.delete(`http://localhost:5000/cadastradas/${maquinaId}`)
        .then(function (response) {
            console.log(response.data);
            // Atualizar a tabela após a exclusão
            obterMaquinas();
        })
        .catch(function (error) {
            console.log(error);
        });
}
