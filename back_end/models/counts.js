const Sequelize = require('sequelize')
const ConnectMySQL = require('../dataBase/mysql')

const VisitorCount = ConnectMySQL.define('visitor', {
	count_visitors: {
		type: Sequelize.INTEGER,
		defaultValue: 1000,
		allowNull: false		
	},
});

// // 默认访问量
// VisitorCount.create({
//     count_visitors: 1000
// })
// 	.then(() => {
// 		console.log("create visitor success")
// 	});

module.exports = {
	VisitorCount
}

