import FaleConoscoDao from "../DAO/FaleConoscoDao.js";

class chamado {
    constructor(db) {
        this.dao = new FaleConoscoDao(db)
    }
    buscarTodosChamados = async() => {
        try {
            return await this.dao.buscarTodosChamados()
        } catch (error) {
            throw new Error(error.mensagem)
        }
    }
    buscarPorId = async(id) => {
        try {
            await this.buscarIdExistente(id)
            return await this.dao.buscarPorId(id)

        } catch (error) {
            return {
                "mensagem": error.message,
                "erro": true
            }
        }
    }
    insereChamado = async(chamado) => {
        try {
            return await this.dao.insereChamado(chamado)
        } catch (error) {
            throw new Error(error.message)
        }
    }
    deletaChamado = async(id) => {
        try {
            await this.buscarIdExistente(id)

            return await this.dao.deletaChamado(id)

        } catch (error) {
            return {
                "mensagem": error.message,
                "erro": true
            }
        }
    }
    atualizaChamado = async(id, chamado) => {
        try {
            await this.buscarIdExistente(id)
            return await this.dao.atualizaChamado(id, chamado)
        } catch (error) {
            return ({
                "mensagem": error.message,
                "erro": true
            })
        }
    }

    buscarIdExistente = async(id) => {
        const resposta = await this.dao.buscarPorId(id)
        if (resposta == "") {
            throw new Error(`Chamado do protocolo ${id} não existe`)
        }
    }
}

export default chamado