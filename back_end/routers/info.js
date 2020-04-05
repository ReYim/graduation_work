const express = require('express')

// 登陆
const userInfoRouter = express.Router({
	mergeParams: true
})
user_info = require('./user')

userInfoRouter.get('/info', user_info.userInfo)


module.exports = {
	userInfoRouter
}
