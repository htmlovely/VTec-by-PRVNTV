
function obterMaquinas() {
    axios.get('http://localhost:5000/cadastradas')
        .then(function (response) {
            var cadastradas = response.data;
            var maquinasTableBody = document.getElementById('maquinas-table-body');

            // Limpar a tabela antes de atualizá-la
            maquinasTableBody.innerHTML = '';

            for (var i = 0; i < cadastradas.length; i++) {
                var maquina = cadastradas[i];
                var tr = document.createElement('tr');

                var idTd = document.createElement('td');
                idTd.textContent = maquina.id;
                tr.appendChild(idTd);

                var nomeTd = document.createElement('td');
                nomeTd.textContent = maquina.nome;
                tr.appendChild(nomeTd);

                var fabricanteTd = document.createElement('td');
                fabricanteTd.textContent = maquina.fabricante;
                tr.appendChild(fabricanteTd);

                var localTd = document.createElement('td');
                localTd.textContent = maquina.localizacao;
                tr.appendChild(localTd);

                var tipoTd = document.createElement('td');
                tipoTd.textContent = maquina.tipo;
                tr.appendChild(tipoTd);

                var ultimaManutencaoTd = document.createElement('td');
                ultimaManutencaoTd.textContent = maquina.Ultimanutencao;
                tr.appendChild(ultimaManutencaoTd);

                var proximaManutencaoTd = document.createElement('td');
                proximaManutencaoTd.textContent = maquina.proximanutencao;
                tr.appendChild(proximaManutencaoTd);

                var acaoTd = document.createElement('td');
                var excluirButton = document.createElement('button');
                excluirButton.textContent = 'Excluir';
                excluirButton.addEventListener('click', (function (maquina) {
                    return function () {
                        excluirMaquina(maquina.id);
                    }
                })(maquina));
                acaoTd.appendChild(excluirButton);
                tr.appendChild(acaoTd);

                maquinasTableBody.appendChild(tr);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

// Chamar a função obterMaquinas inicialmente para exibir os dados na tabela
obterMaquinas();
