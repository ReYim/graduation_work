const Sequelize = require('sequelize')
const config = require('../configs/config')

let ConnectMySQL = connectToMysql();

function connectToMysql() {
    let host = config.mysql_config.DB_HOST;
    let port = config.mysql_config.DB_PORT;
    let database = config.mysql_config.DB_NAME;
    let user = config.mysql_config.DB_USER;
    let password = config.mysql_config.DB_PASSWORD;

    try {
        var sequelize = new Sequelize(database, user, password, {
            host: host,
            port: port,
            dialect: 'mysql',
            // timezone: '+8:00',
            pool: {                 // 连接池
                max: 5,             // 最大值
                min: 0,             // 最小值
                idle: 10000        // 闲时超时
            },
            define: {
                paranoid: false, // 返回删除和未删除的全部记录, true 只返回未删除的记录
                charset: 'utf8'
            }
        });
        console.log("mysql 数据库连接成功！");
        sequelize.sync()
        return sequelize
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = ConnectMySQL