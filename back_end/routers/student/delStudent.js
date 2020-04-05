const student_info = require('../../models/student')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')
const ConnectMySQL = require('../../dataBase/mysql')
const sequelize = ConnectMySQL;

/**
 * 删除管理老师信息
 * 传参user_name
 */

let del_student= async function (request, response) {
    try {
        if (!request.query) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }
        let student_name = request.query.student_name;
        return sequelize.transaction(function (t) {
            return user_module.UserModel.destroy({
                where: {
                    user_name: student_name
                }
            }, { transaction: t }).then(function () {
                return student_info.StudentInfo.destroy({
                    where: {
                        user_name: student_name
                    }
                }, { transaction: t });
            });
        }).then(result => {
            response.json({
                code: 200,
                message: '删除学生成功！',
                data: result
            })
        }).catch(function (error) {
            utils_common.sendMessage(response, 1017, "删除学生失败!" + error)
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "删除学生信息接口捕获错误 " + error)
    }
}

module.exports = {
    del_student
}