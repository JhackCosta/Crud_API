import express from "express";

import dataBase from "./dataBase/conexaoDB.js"
import controller from "./Controller/faleConoscoController.js"

const app = express();

app.use(express.json());

const porta = 3000;

controller(app, dataBase)




app.listen(porta, () => {
    console.log(`API rodando na porta ${porta} com sucesso!`);
});