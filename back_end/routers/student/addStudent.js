const student_info = require('../../models/student')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')
const ConnectMySQL = require('../../dataBase/mysql')
const sequelize = ConnectMySQL;

/**
 * 添加学生账号
 * post请求
 */

let add_student = async function (request, response) {
    try {
        let student_name = request.body.student_name;
        let student_password = request.body.student_id;
        let student_id = request.body.student_id;
        let charger_teacher_name = request.body.charger_teacher_name; // 前端获取当前老师mysql中的ID放到body中
        console.log(charger_teacher_name);
        
        
        // let student_faculty = request.body.student_faculty;
        // let home_address = request.body.home_address;
        // let student_awards = request.body.student_awards;

        if (!student_name || !student_password) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }

        // sequelize 事务 详情=>  https://itbilu.com/nodejs/npm/EJO6CcCM-.html
        return sequelize.transaction(function (t) {
            // 要确保所有的查询都有return 返回 just like promise
            return user_module.UserModel.create({
                user_name: student_name,
                user_password: student_password, // 默认密码设置为工号，登录之后必须修改密码
                user_status: 1,
                user_role: 'student',

            }, { transaction: t }).then(function () {
                return student_info.StudentInfo.create({
                    user_name: student_name,
                    student_id: student_id,
                    // student_faculty: student_faculty,
                    // student_faculty: student_faculty,
                    // home_address: home_address,
                    // student_awards: student_awards,
                    charger_teacher_id: charger_teacher_name,
                }, { transaction: t });
            });
        }).then(function (result) {
            // Transaction 会自动提交
            // result 是事务回调中使用promise链中执行结果
            response.json({
                code: 200,
                message: '添加学生成功!',
                data: result
            })
        }).catch(function (error) {
            utils_common.sendMessage(response, 1017, "添加学生失败! " + error)
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "添加学生接口捕获错误：" + error)
    }
}

module.exports = {
    add_student
}

