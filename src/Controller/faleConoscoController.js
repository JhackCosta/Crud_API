import chamado from "../model/model.js";

const chamadoController = (app, db) => {

    const novoChamado = new chamado(db)

    app.get('/chamado', async(req, res) => {
        try {
            const resposta = await novoChamado.buscarTodosChamados()
            res.status(200)
                .json({
                    "chamados": resposta,
                    "erro": false
                })
        } catch (err) {
            res.status(401)
                .json({
                    "mensagem: ": err.message,
                    "erro": true
                })
        }
    })
    app.get('/chamado/:id', async(req, res) => {
        try {
            let id = req.params.id
            const resposta = await novoChamado.buscarPorId(id)
            res.status(200)
                .json({
                    "Chamado": resposta,
                    "erro": false
                })
        } catch (err) {
            res.status(401)
                .json({
                    "mensagem: ": err.message,
                    "erro": true
                })
        }
    })

    app.post('/novoChamado', async(req, res) => {

        const body = req.body

        try {
            const resposta = await novoChamado.insereChamado(body)
            res.status(201)
                .json({
                    "mensagem": resposta,
                    "erro": false
                })
        } catch (error) {
            res.status(401)
                .json({
                    "mensagem": error.message,
                    "erro": error
                })
        }
    })

    app.put('/chamado/id/:id', async(req, res) => {
        try {
            const id = req.params.id
            const body = req.body
            const resposta = await novoChamado.atualizaChamado(id, body)
            res.status(200)
                .json({
                    "mensagem": resposta,
                    "erro": false
                })
        } catch (error) {
            res.status(401)
                .json({
                    "mensagem": error.message,
                    "erro": error
                })
        }
    })

    app.delete('/chamado/id/:id', async(req, res) => {

        try {
            let id = req.params.id
            const resposta = await novoChamado.deletaChamado(id)
            res.status(301)
                .json({
                    "mensagem": resposta,
                    "erro": false
                })
        } catch (error) {
            res.status(401)
                .json({
                    "mensagem": error.message,
                    "erro": error
                })
        }
    })

}

export default chamadoController