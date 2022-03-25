# :construction: Escola - Projeto de módulo 4 - Resilia

Projeto de educacional do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/) referente ao Fim do Módulo 04.

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/).

## Objetivo
Esse projeto tem como objetivo criar uma API RESTful de uma Escola, onde será possível aplicar as operações CRUD na entidade `Fale_conosco`.

## Pré-Requisitos

* Node.js  v.16.14.0
* NPM v.8.3.1


## Pacotes utilizados
* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite](https://www.npmjs.com/package/sqlite3)  v.5.0.2

## Instalação da Aplicação

Instalando os pacotes:
```
npm install express

npm install Nodemon

npm install Sqlite3
```

Iniciando o servidor:
```
npm run dev
```
---

## Rotas implementadas

### Compras

 * **GET /chamado**
 
    Schema da resposta
    ```
    {

        "chamados": [
        {
            "ID_PROTOCOLO": INT,
            "ASSUNTO": VARCHAR(),
            "DATA": VARCHAR(),
            "HORARIO": VARCHAR(),
            "MENSAGEM": VARCHAR(),
            "NOME": VARCHAR(),
            "CPF": VARCHAR()
        }
            ]

            "erro": <Boleano>

    }
    ```

 * **POST /novoChamado**

     Schema da requisição
    ```
    {
    "assunto" : VARCHAR(),
    "data": VARCHAR(),
    "horario": VARCHAR(),
    "mensagem": VARCHAR(),
    "nome":VARCHAR(),
    "cpf": VARCHAR()
    }
    ```

    Schema da resposta
    ```
    {
    "mensagem": <String>,
    "erro": <Boleano>
    }
    ```

 * **PUT /compra/id/{id}**

     Schema da requisição
    ```
    {
    "assunto" : VARCHAR(),
    "data": VARCHAR(),
    "horario": VARCHAR(),
    "mensagem": VARCHAR(),
    "nome":VARCHAR(),
    "cpf": VARCHAR()
    }
    ```

    Schema da resposta
    ```
    {
    "mensagem": {
        "mensagem": <String>,
        "cliente": <String>,
        "erro": <Boleano>
    },
    "erro": <Boleano>
    ```

 * **DELETE /chamado/id/{id}**

    Schema da resposta
    ```
    {   
        msg: <String>
        erro: <Boleano>
    }
    ```
    



