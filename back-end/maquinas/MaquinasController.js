const express = require("express")
const router = express.Router()
const maquinas = require("../models/maquinas")

//Controllers


// Rotas das API'S
router.post("/cadastro", (req, res) => {
    const { fabricante, nome, localizacao, tipo, Ultimanutencao, proximanutencao } = req.body;

    console.log(nome);
    console.log(fabricante);
    console.log(localizacao);
    console.log(tipo);
    console.log(Ultimanutencao);
    console.log(proximanutencao);

    maquinas
        .create({
            fabricante: fabricante,
            nome: nome,
            localizacao: localizacao,
            tipo: tipo,
            Ultimanutencao: Ultimanutencao,
            proximanutencao: proximanutencao,
        })
        .then((dadoscadastro) => {
            console.log(dadoscadastro.toJSON());
            res.send("Dados enviados com sucesso!");
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send("Ocorreu um erro ao enviar os dados!");
        });
});

router.get("/cadastradas", (req, res) => {
    maquinas.findAll({
    }).then((cadastradas) => {
        console.log(cadastradas.map(cadastradas => cadastradas.toJSON()))
        res.send(cadastradas)
    }).catch((error) => {
        console.log(error)
    })
})


router.put('/cadastradas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, fabricante, local, tipo, ultimanutencao, proximanutencao } = req.body;
    console.log(id, nome, fabricante, local, tipo, ultimanutencao, proximanutencao);
    maquinas.update(
        {
            nome: nome,
            fabricante: fabricante,
            localizacao: local, // corrigido para "localizacao"
            tipo: tipo,
            Ultimanutencao: ultimanutencao, // corrigido para "Ultimanutencao"
            proximanutencao: proximanutencao,
        },
        {
            where: {
                id: id,
            },
        }
    )
        .then(() => {
            res.status(200).send('Dados atualizados com sucesso!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao atualizar dados da máquina.');
        });
});

router.delete('/cadastradas/:id', (req, res) => {
    const { id } = req.params;

    maquinas
        .destroy({
            where: {
                id: id,
            },
        })
        .then(() => {
            res.status(200).send('Dados excluídos com sucesso!');
        })
        .catch((error) => {
            console.log(error);
            res.status(500).send('Erro ao excluir dados da máquina.');
        });
});

module.exports = router