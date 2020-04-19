const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Teste')
})

router.get('/admin', (req, res) => {
    res.send('Página do administrador')
})

router.get('/posts', (req, res)=> {
    res.send('Página de posts')
})

module.exports = router 

/*
app.get('/atualiza/:id', function(req, res){
  Post.findAll( {limit: 1, where : {'id' : req.params.id}} ).then(function(posts){
    res.render('update', {posts :posts})
  })
})

app.post('/update', function(req, res){
  Post.update(
    {titulo : req.body.titulo},
    {where: {'id' : req.body.id}}
  ).then(function(){
    res.send('Atualizado com sucesso')
  }).catch(function(erro){
    res.send('Ops :'+erro)
  })
})
*/ 