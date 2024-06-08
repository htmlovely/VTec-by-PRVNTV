//Imports
const express = require("express")
const app = express()
const cors = require("cors")
const database = require("./database/db")


//Controllers
const maquinasController = require("./maquinas/MaquinasController")

//configuracao do app - express
app.use(cors())
app.use(express.json())

//autenticacao c banco de dados
database
    .authenticate()
    .then(() => {
        console.log("Conexao com o banco de dados realizada com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

//CONTINUANDO ESTA CACETA 

//chamando os controllers da maquina
app.use("/", maquinasController)


// Porta do servidor
app.listen(5000, () => {
    console.log("Aplicação on-line! \n Url:http://localhost:5000/cadastradas");
});