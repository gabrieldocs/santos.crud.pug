// Santos, gabriel 
// App code comes here 
// Callback é executado sempre que um evento acontece 
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const admin = require('./routes/admin')
const path = require('path')
//conectando via sequelize 

// Config 
  //Template Engine
  app.set('views', __dirname + '/public/views')
  app.set('view engine', 'pug')
  //
  app.use(bodyParser.urlencoded({extended : false}))
  app.use(bodyParser.json())
  // Conexão com o banco de dados MySQL 
  //conectando via sequelize 
    const Sequelize = require('sequelize')
    const sequelize = new Sequelize('node', 'root', 'lajg32d559862', {
        host: 'localhost',
        dialect: 'mysql'
    })
  app.use(express.static(path.join(__dirname,"public")))
// Rotas 

app.get('/json', (req, res) => {
  res.json({hello: 'world'})
})

app.get('/cad', function(req, res) {
  res.render('register', {title : 'SANTOS', message : 'Lucas Santos'})
})

//esta rota recebe os dados do formulário
app.post('/data', function(req, res){
  Post.create({
    titulo : req.body.titulo,  
    conteudo : req.body.conteudo
  }).then(function(){
    //res.send('Post criado com sucesso')
    res.redirect('/')
  }).catch(function(erro){
    res.send('Falha na criação da postagem ' + erro)
  })
  //console.log(req.body.titulo + req.body.conteudo)
  //res.send('Formulário Recebido')
}) 

app.get('/', function(req, res){
  Post.findAll({ order : [['id', 'DESC']]}).then(function(posts){
    console.log(posts)
    res.render('index', {title : 'Hey', message : 'Lucas Santos', posts: posts})
  })
})

// rota para atualizar 
app.get('/atualiza/:id', function(req, res){
  Post.findAll( {limit: 1, where : {'id' : req.params.id}} ).then(function(posts){
    res.render('update', {posts :posts})
  })
})


app.post('/update', function(req, res){
  //res.send(req.body.titulo + req.body.id)

  Post.update( {titulo : req.body.titulo}, {where: { id : req.body.id}}
  ).then(function(){
    res.send('Atualizado com sucesso')
  }).catch(function(erro){
    res.send('Ops :'+erro)
  })
})
//rota para deletar postagens com node 

app.get('/delete/:id', function(req, res){
  Post.destroy({where : {'id' : req.params.id}}).then(function(){
    res.send('Gone big brother!')
  }).catch(function(erro){
    console.log('Erro')
  })
})

//Rotas 

app.use('/admin', admin)

// Last line on code 
const PORT = 8081
app.listen(PORT, function(){
    console.log('Servidor rodando')
})