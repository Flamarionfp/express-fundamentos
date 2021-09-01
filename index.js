const express = require('express') //Importando o módulo express
const app = express(); //Criando uma instância do express

//Criando a rota raiz
app.get('/', (req, res) => {
  res.send("Bem vindo ao meu site!") //Enviando uma resposta com o método send do objeto res
})

//Toda rota precisa devolver uma resposta, seja uma página html, json, xml, download, etc...

//Nunca deve-se retornar duas respostas na rota

//Quando envia a resposta a conexão com o cliente é FECHADA

//Rota do Blog - paramtro opcional
app.get('/blog/:artigo?', (req, res) => {
  let artigo = req.params.artigo

  //Verificando se o param artigo foi passado
  if (artigo) {
    res.send(`<h2>Artigo: ${artigo}</h2>`)
  } else {
    res.send("Bem vindo ao meu blog!")
  }
})

//Rota do canal do youtube
app.get('/canal/youtube', (req, res) => {
  let canal = req.query["canal"] //Acessar um param canal de query (opcional)
  //Verificando se foi recebido o parametro de query "canal"
  if (canal) {
    res.send(`Bem vindo ao canal ${canal}`)
  } else {
    res.send('Nenhum canal informado!')
  }
})

//Os parametros mais usados são os fixos em rotas, sejam eles obrigatórios ou não

//Rota olá - rota com parametros obrigatórios
app.get('/ola/:nome/:empresa', (req, res) => { //Definindo a rota e o parametro que quero receber (nome)
  let nome = req.params.nome
  let empresa = req.params.empresa
  res.send(`
    <h1>Olá ${nome}!</h1> <br>
    <h2>Você é da empresa ${empresa}</h2>
  `)
})

//O objeto req são os dados enviados pelo usuário na requisição para o servidor
//O objeto res é a resposta enviada do servidor para o usuário

const port = 4000
app.listen(port, (erro) => {
  if (erro) {
    console.log('Ocorreu um erro!')
  } else {
    console.log(`Servidor rodando na porta ${port}`)
  }
})

