class verifica {

    constructor()

    _verificaChamado = async(id) => {
        const resposta = await this.dao.pegaChamadoId(id)
        if (resposta.id.length === 0) {
            throw new Error(`Esse protocolo de id ${id} não existe`)
        }
    }
}

export default verifica