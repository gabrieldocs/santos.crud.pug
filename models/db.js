const Sequelize = require('sequelize')
const sequelize = new Sequelize('node', 'root', 'lajg32d559862', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize : Sequelize,
    sequelize : sequelize
}



/*
sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}) .catch(function(erro) {
    console.log('Falha ao se conectar: '+ erro)
})
*/
