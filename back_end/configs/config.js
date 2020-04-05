// node 服务器配置
var server_config = {
    HOST: 'localhost',
    PORT: 8080
}

// mysql 配置
var mysql_config = {
    DB_HOST : 'localhost',
    DB_NAME : 'reyimData',
    DB_USER : 'root',
    DB_PASSWORD : '',
    DB_PORT : '3306'
}

// redis 配置
var redis_config = {
    HOST: 'localhost',
    PORT: 6379,
    USER: "",
    PASSWORD: "",
    EXPIRE_TIME: 60*30
}

// 生成token的key
json_web_token_key = 'ReYim_7'

module.exports = {
    server_config,
    mysql_config,
    redis_config
}
