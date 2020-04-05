const express = require('express')
const bodyParser = require('body-parser')
const config = require('./configs/config')
const userRouter = require('./routers/index')
const teacherListRouter = require('./routers/teacher')
const studentListRouter = require('./routers/student')

const access_cross_controller = require('./controller/access_cross')

const app = express()

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/user', access_cross_controller, userRouter.loginRouter)
app.use('/teacher', access_cross_controller, teacherListRouter.addTeacherRouter)
app.use('/student', access_cross_controller, studentListRouter.addStudentRouter)


app.listen(config.server_config.PORT, config.server_config.HOST, function() {
	console.log("server started at: http://" + config.server_config.HOST + ":" + config.server_config.PORT)
})
process.on('uncaughtException', (err) => {
    console.error('Error caught in uncaughtException event:', err);
});

