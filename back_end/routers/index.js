const express = require('express')

// 登陆
const loginRouter = express.Router({
	mergeParams: true
})
user_login = require('./user')

loginRouter.post('/login', user_login.login)
loginRouter.get('/info', user_login.userInfo)
loginRouter.get('/logout', user_login.logout)
loginRouter.post('/reset_password', user_login.reset_password)

module.exports = {
	loginRouter
}
