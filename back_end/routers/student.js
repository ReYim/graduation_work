const express = require('express')

const addStudentRouter = express.Router({
    mergeParams: true
})

/**
 * 学生相关接口
 */
add = require('./student/addStudent')
get = require('./student/getStudent')
getForManager = require('./student/getStudentForManager')
del = require('./student/delStudent')
update = require('./student/updateStudentInfo')
info = require('./student/getStudentInfo')

addStudentRouter.post('/add_student', add.add_student)
addStudentRouter.get('/get_student', get.get_student)
addStudentRouter.get('/manager_get_student', getForManager.get_student_for_manager)
addStudentRouter.get('/del_student', del.del_student)
addStudentRouter.post('/update_student_info', update.update_student_info)
addStudentRouter.get('/get_student_info', info.get_student_info)

module.exports = {
    addStudentRouter
}