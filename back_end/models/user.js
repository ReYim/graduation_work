const Sequelize = require('sequelize')
const ConnectMySQL = require('../dataBase/mysql')

const UserModel = ConnectMySQL.define('user', {
	user_name: {
		type: Sequelize.STRING,
		unique: true, // 不能重复
		allowNull: false,
	},
	user_password: {
		type: Sequelize.STRING(12),
		allowNull: false,
	},
	user_status: {
		type: Sequelize.INTEGER,
		defaultValue: 1,  // 1可用 0限制使用
		allowNull: false
	},
	user_role: {
		type: Sequelize.STRING,
		allowNull: false,
		defaultValue: 'manager' // manager, teacher, student
	},

});


// // 默认管理员密码
// UserModel.create({
// 	user_name: '尼加提',
// 	user_password: '456789',
// 	user_status: 1,
// 	user_role: 'manager'
// })
// 	.then(() => {
// 		console.log("create user success")
// 	});



module.exports = {
	UserModel
}

