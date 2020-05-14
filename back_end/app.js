const express = require('express')
const bodyParser = require('body-parser')
const config = require('./configs/config')
const userRouter = require('./routers/index')
const teacherListRouter = require('./routers/teacher')
const studentListRouter = require('./routers/student')

const https = require('https')
const fs = require('fs')

const access_cross_controller = require('./controller/access_cross')
const count_visitors_controller = require('./controller/count_visitors')

const app = express()

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/**
 * host and port config
 */

https.createServer({
    key: fs.readFileSync('./3081777_kujijiku.com.key'),
    cert: fs.readFileSync('./3081777_kujijiku.com.crt')
  },app).listen(config.server_config.PORT, config.server_config.HOST, () => {
   console.log("server started at: ", config.server_config.HOST + ":" + config.server_config.PORT)
  })

/**
 * 静态资源
 */
app.use(express.static('./dist'));
app.use(express.static('./public'));
app.get('/',function (req,res) {
    res.header("Access-Control-Allow-Credentials", "true")
	  res.header("Access-Control-Allow-Origin", "*")
    res.sendFile("./dist/index.html")
})


app.use('/user', access_cross_controller, count_visitors_controller, userRouter.loginRouter)
app.use('/teacher', access_cross_controller, count_visitors_controller, teacherListRouter.addTeacherRouter)
app.use('/student', access_cross_controller, count_visitors_controller, studentListRouter.addStudentRouter)


app.listen(config.server_config.PORT, config.server_config.HOST, function() {
	console.log("server started at: http://" + config.server_config.HOST + ":" + config.server_config.PORT)
})
process.on('uncaughtException', (err) => {
    console.error('Error caught in uncaughtException event:', err);
});

