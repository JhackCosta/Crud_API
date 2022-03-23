class FaleConoscoDao {
    constructor(db) {
        this.db = db;
    }
    buscarTodosChamados = () => {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM CHAMADO', (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            })
        })
    }

    buscarPorId = (id) => {
        return new Promise((resolve, reject) => {
            this.db.all('SELECT * FROM CHAMADO WHERE ID_PROTOCOLO = ?', [id],
                (error, rows) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(
                            rows
                        )
                    }
                })
        })
    }
    insereChamado = (chamado) => {
        return new Promise((resolve, reject) => {
            this.db.run("INSERT INTO CHAMADO(ASSUNTO, DATA, HORARIO, MENSAGEM, NOME, CPF) VALUES (?, ?, ?, ?, ?, ?)",
                chamado.assunto, chamado.data, chamado.horario, chamado.mensagem, chamado.nome, chamado.cpf,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(`Chamado ${chamado.nome} inserido com sucesso`)
                    }
                })
        })
    }

    deletaChamado = (id) => {
        return new Promise((resolve, reject) => {
            this.db.run('DELETE FROM CHAMADO WHERE ID_PROTOCOLO = ?',
                id,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "chamado": `protocolo ${id} deletado com sucesso`,
                            "erro": false
                        })
                    }
                })
        })
    }

    atualizaChamado = (id, chamado) => {
        return new Promise((resolve, reject) => {
            this.db.run('UPDATE CHAMADO SET ASSUNTO = ?, DATA = ?, HORARIO = ?, MENSAGEM = ?, NOME = ?, CPF = ?  WHERE ID_PROTOCOLO = ?',
                chamado.assunto, chamado.data, chamado.horario, chamado.mensagem, chamado.nome, chamado.cpf,
                id,
                (error) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve({
                            "mensagem": `protocolo ${id} atualizado com sucesso`,
                            "cliente": chamado.nome,
                            "erro": false
                        })
                    }
                })
        })
    }
}

export default FaleConoscoDao