import sqlite3 from 'sqlite3'


sqlite3.verbose()

import { dirname } from 'path'
import { fileURLToPath } from 'url'


const filePath = dirname(fileURLToPath(
    import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);

const faleConosco_Schema = 'CREATE TABLE IF NOT EXISTS "CHAMADO" ("ID_PROTOCOLO" INTEGER PRIMARY KEY AUTOINCREMENT,"ASSUNTO" VARCHAR(255),"DATA" VARCHAR(10),"HORARIO" VARCHAR(12), "MENSAGEM" VARCHAR(250), "NOME" VARCHAR(110), "CPF" VARCHAR(12));'

function criarTabela() {
    db.run(faleConosco_Schema, (error) => {
        if (error) console.log("Erro ao criar tabela de usuários");
    });
}

db.serialize(() => {
    criarTabela()
})