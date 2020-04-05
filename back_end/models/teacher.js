const Sequelize = require('sequelize')
const ConnectMySQL = require('../dataBase/mysql')

const TeacheInfo = ConnectMySQL.define('teacher_info', {
    user_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    management_faculty: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = {
    TeacheInfo
}