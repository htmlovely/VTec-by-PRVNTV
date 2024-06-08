const button = document.querySelector('#cadastro-button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome_cad').value;
  const fabricante = document.querySelector('#fab_cad').value;
  const localizacao = document.querySelector('#local_cad').value;
  const tipo = document.querySelector('#tipo_cad').value;
  const ultimanutencao = document.querySelector('#ultimanutencao_cad').value;
  const proximanutencao = document.querySelector('#proximanutencao_cad').value;

  axios.post('http://localhost:5000/cadastro', {
    fabricante: fabricante,
    nome: nome,
    localizacao: localizacao,
    tipo: tipo,
    Ultimanutencao: ultimanutencao,
    proximanutencao: proximanutencao
  })
    .then(response => {
      console.log(response.data);
      alert('Dados enviados com sucesso!');
      location.reload(); // Recarrega a página
    })
    .catch(error => {
      alert('Ocorreu um erro ao enviar os dados!');
      console.log(error);
    });
});
