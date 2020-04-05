const express = require('express')

const addTeacherRouter = express.Router({
    mergeParams: true
})

/**
 * 老师相关接口
 */
add = require('./teacher/addTeacher')
get = require('./teacher/getTeacher')
del = require('./teacher/delTeacher')
update = require('./teacher/updateTeacher')

addTeacherRouter.post('/add_teacher', add.add_teacher)
addTeacherRouter.get('/get_teacher', get.get_teacher)
addTeacherRouter.get('/del_teacher', del.del_teacher)
addTeacherRouter.get('/update_teacher', update.update_teacher)

module.exports = {
    addTeacherRouter
}