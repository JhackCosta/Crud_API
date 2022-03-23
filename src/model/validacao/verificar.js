let verificacao = new chamado()

export default verificaIdExistente = async(id) => {
    const resposta = await verificacao.buscarPorId(id)
    if (resposta.id.length === 0) {
        throw new Error(`Esse protocolo de id ${id} não existe`)
    }
}