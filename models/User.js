const db = require('./db')

const User = db.sequelize.define('usuario', {
    nome : {
        type : db.Sequelize.STRING
    },
    email : {
        type: db.Sequelize.STRING
    },
    pin : {
        type: db.Sequelize.INTEGER
    }  
})


User.synct({force : true})