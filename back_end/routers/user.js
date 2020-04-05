const redis = require('redis')
const jwt = require('jsonwebtoken')
const user_module = require('../models/user')
const config = require('../configs/config')
const utils_common = require('../utils/common')


/**
 * 登陆
 * @param {*} request 
 * @param {*} response 
 */
let login = async function (request, response) {
    try {
        console.log(request.body.username)
        console.log(request.body.password)
        let username = request.body.username
        let password = request.body.password

        if (username && password) {
            let user_data = {
                user_name: '',
                user_password: '',
                id: '',
                user_status: '',
                user_role: '',
                timestep: '',
                token: ''
            }
            let user = await user_module.UserModel.findOne(
                {
                    attributes: ['id', 'user_name', 'user_password', 'user_role', 'user_status', 'createdAt'],
                    where: {
                        user_name: username,
                        user_password: password
                    }
                }
            )
            if (!user) {
                utils_common.sendMessage(response, 60204, '用户名或密码错误')
                // response.json({
                //     message: '用户不存在',
                //     code: 60204
                // })
                return
            } else {
                user_data.user_status = user.dataValues.user_status
                if (!user_data.user_status) {
                    utils_common.sendMessage(response, 1010, '账号被限制（0）')
                    return  // 在一个回调函数前边应该加一个return 不然报重复响应的错误
                }
                user_data.user_name = user.dataValues.user_name
                user_data.user_role = user.dataValues.user_role
                user_data.user_password = user.dataValues.user_password
                user_data.timestep = user.dataValues.createdAt
                user_data.id = user.dataValues.id

                // if(username !== user_data.user_name || password !== user_data.user_password) {
                //     utils_common.sendMessage(response, 1013, '用户名或密码错误')
                //     return
                // }

                let user_info_token = {
                    user_name: user_data.user_name,
                    user_role: user_data.user_role
                }

                let get_token_result = await jwt.sign(user_info_token, 'ReYim_7')
                user_data.token = get_token_result

                // token 保存到redis
                let redisClient = await redis.createClient(config.redis_config.PORT, config.redis_config.HOST)
                let redis_set_result = await redisClient.set(user_data.user_name, user_data.token)
                redisClient.expire(user_data.user_name, 60 * 15) //设置过期时间为15分钟
                redisClient.on("error", function (error) {
                    console.log("redis error", error);
                });

                if (!redis_set_result) {
                    response.json({
                        message: 'token生成成功！',
                        data: user_data,
                        code: 20000
                    })
                    return
                } else {
                    utils_common.sendMessage(response, 1015, 'redis error')
                    return
                }
            }
        } else {
            utils_common.sendMessage(response, 1011, '参数错误')
            return
        }
    } catch (err) {
        utils_common.sendMessage(response, 1015, '登陆错误联系开发人员' + err)
        return
    }
}

let userInfo = async function (request, response, next) {
    console.log(request.query)
    var token = request.query.token
    // 解析token
    let verify_token_data = await jwt.verify(token, 'ReYim_7', (err, data) => {
        console.log("解析token的data---", data);

        if (err || !data) {
            utils_common.sendMessage(response, 1006, 'token解析失败')
            return
        }
        return data
    })

    // token 解析成功
    // 从redis获取改用户的token 然后与当前的token比较
    // 解析token后从redis获取 token
    let redisClient = await redis.createClient(config.redis_config.PORT, config.redis_config.HOST)
    // await redisClient.auth(config.redis_config.PASSWORD)

    redisClient.get(verify_token_data.user_name, (err, data) => {
        console.log('data from redis :', data)
        if (err) {
            utils_common.sendMessage(response, 1012, 'redis获取token失败')
            return
        }

        if (data) {
            if (data == token) {
                response.json({
                    message: '登陆成功',
                    data: verify_token_data,
                    code: 20000
                })
                next()
                return
            } else if (data != token.trim()) {
                utils_common.sendMessage(response, 50012, '其他客户端登陆了')
                return
            } else {
                utils_common.sendMessage(response, 50008, '非法的token')
            }
        } else {
            utils_common.sendMessage(response, 50014, 'Token过期了') // TODO 设置tokene xpires
            return
        }
    })


}

/**
 * 登出
 * @param {*} request 
 * @param {*} response 
 */
let logout = async function (request, response) {
    // 检查参数
    // console.log(request.query);

    if (utils_common.isEmpty(request.query.token)) {
        response.end('token格式有误，无法正常退出！')
        return
    }
    try {
        let token = request.query.token

        // 解析token
        let verify_token_data = await jwt.verify(token, 'ReYim_7', (err, data) => {
            if (err) {
                response.end('无法解析 token')
                return
            }
            return data
        })

        // 解析token后从redis获取 token
        let redisClient = await redis.createClient(config.redis_config.PORT, config.redis_config.HOST)
        redisClient.get(verify_token_data.user_name, (err, data) => {
            if (err || !data) {
                utils_common.sendMessage(response, 1015, '不存在的token')
                return
            }

            // 如果不一样
            if (data != token) {
                utils_common.sendMessage(response, 1015, 'token验证失败，无法正常退出！')
                return
            }

            // 如果前端传的token和从redis获取的token一样则删除token
            if (data == token) {
                // 从redis删除token 
                redisClient.del(verify_token_data.user_name, (err) => {
                    if (err) {
                        utils_common.sendMessage(response, 1015, 'redis上 token清除失败')
                        return
                    }
                    response.json({
                        message: '登出成功',
                        code: 20000
                    })
                    return
                })

            }
            return data
        })

    } catch (err) {
        utils_common.sendMessage(response, 1015, '登出错误联系开发人员' + err)
        return
    }
}

let reset_password = async function (request, response) {
    try {
        let user_name = request.body.user_name;
        let password = request.body.password;
        console.log(user_name, password);
        if (!user_name || !password) {
            utils_common.sendMessage(response, 1016, "参数传入有误")
            return
        }

        user_module.UserModel.update({
            user_password: password
        },
        {
            where: {
                user_name: user_name
            }
        
        }).then( result => {
            response.json({
                code: 200,
                message: '修改密码成功！'
            })
        }).catch( err => {
            utils_common.sendMessage(response, 1017, '修改密码失败！' + err)
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, '修改密码接口捕获错误' + err)
        return
    }
}

module.exports = {
    login,
    logout,
    userInfo,
    reset_password
}
