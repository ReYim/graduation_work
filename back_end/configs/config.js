// node 服务器配置
var server_config = {
    HOST: '0.0.0.0',
    PORT: 8081
}

// mysql 配置
var mysql_config = {
    DB_HOST: 'kujijiku.com',
    DB_NAME: 'reyim',
    DB_USER: 'reyim',
    DB_PASSWORD: 'KjZhwcxbt8t5RaLH',
    DB_PORT: '3306'
}

// redis 配置
var redis_config = {
    HOST: '123.56.88.197',
    PORT: 6379,
    USER: "",
    PASSWORD: "",
    EXPIRE_TIME: 60 * 30
}

// 生成token的key
json_web_token_key = 'ReYim_7'

module.exports = {
    server_config,
    mysql_config,
    redis_config
}
