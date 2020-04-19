//conectando via sequelize 

const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'root', 'lajg32d559862', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}) .catch(function(erro) {
    console.log('Falha ao se conectar: '+ erro)
})

const Postagem = sequelize.define('postagens', {
    titulo : {
        type : Sequelize.STRING
    },
    conteudo : {
        type : Sequelize.TEXT
    }
})

const Usuario = sequelize.define('usuarios', {
    nome : {
        type : Sequelize.STRING
    },
    email : {
        type :Sequelize.STRING
    },
    idade : {
        type : Sequelize.INTEGER
    }
})

//Postage.sync({force:true})
//Usuario.sync({force: true})

Postagem.create({
    titulo : '404 and the missing Jedi',
    conteudo : 'This is just a placeholder'
})

Usuario.create({
    nome: 'Gabriel',
    email: 'email@mail.com',
    idade: 24 
})