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

            if (this.validarCPF(chamado.cpf) == true) {
                return await this.dao.insereChamado(chamado)
            } else {
                throw new Error("CPF inválido!")
            }


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
        /////////////////////////////////////////// Validações de campos /////////////////////////////////////////////////
    buscarIdExistente = async(id) => {
        const resposta = await this.dao.buscarPorId(id)
        if (resposta == "") {
            throw new Error(`Chamado do protocolo ${id} não existe`)
        }
    }

    validarCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g, '');
        if (cpf == '') return false;

        if (cpf.length != 11 ||
            cpf == "00000000000" ||
            cpf == "11111111111" ||
            cpf == "22222222222" ||
            cpf == "33333333333" ||
            cpf == "44444444444" ||
            cpf == "55555555555" ||
            cpf == "66666666666" ||
            cpf == "77777777777" ||
            cpf == "88888888888" ||
            cpf == "99999999999")
            return false;

        let add = 0;
        for (let i = 0; i < 9; i++)
            add += parseInt(cpf.charAt(i)) * (10 - i);
        let rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(9)))
            return false;

        add = 0;
        for (let j = 0; j < 10; j++)
            add += parseInt(cpf.charAt(j)) * (11 - j);
        rev = 11 - (add % 11);
        if (rev == 10 || rev == 11)
            rev = 0;
        if (rev != parseInt(cpf.charAt(10)))
            return false;
        return true;
    }


}

export default chamado