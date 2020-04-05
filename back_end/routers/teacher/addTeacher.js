const teacher_info = require('../../models/teacher')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')
const ConnectMySQL = require('../../dataBase/mysql')
const sequelize = ConnectMySQL;

/**
 * 添加管理老师信息
 * post请求
 */

let add_teacher = async function (request, response) {
    try {
        console.log(request.body);
        
        let teacher_name = request.body.teacher_name;
        let teacher_password = request.body.teacher_id;
        let teacher_id = request.body.teacher_id;
        let management_faculty = request.body.management_faculty;
        let teacher_permission = request.body.teacher_permission;
        console.log(teacher_name, teacher_password, teacher_id, management_faculty, teacher_permission);

        if (!teacher_name) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }

        // sequelize 事务 详情=>  https://itbilu.com/nodejs/npm/EJO6CcCM-.html
        return sequelize.transaction(function (t) {
            // 要确保所有的查询都有return 返回 just like promise
            return user_module.UserModel.create({
                user_name: teacher_name,
                user_password: teacher_password, // 默认密码设置为工号，登录之后必须修改密码
                user_status: 1,
                user_role: teacher_permission,

            }, { transaction: t }).then(function () {
                return teacher_info.TeacheInfo.create({
                    user_name: teacher_name,
                    teacher_id: teacher_id,
                    management_faculty: management_faculty,
                }, { transaction: t });
            });
        }).then(function (result) {
            // Transaction 会自动提交
            // result 是事务回调中使用promise链中执行结果
            response.json({
                code: 200,
                message: '添加老师成功',
                data: result
            })
        }).catch(function (error) {
            utils_common.sendMessage(response, 1016, error)
        })
    } catch (error) {
        utils_common.sendMessage(response, 1015, "添加老师账号接口捕获错误：" + error)
        
    }
}

module.exports = {
    add_teacher,
}