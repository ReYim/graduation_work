const teacher_info = require('../../models/teacher')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')
const ConnectMySQL = require('../../dataBase/mysql')
const sequelize = ConnectMySQL;

/**
 * 编辑管理老师信息
 * 传参user_name
 */

let update_teacher = async function (request, response) {
    try {
        let user_name = request.query.user_name;
        let management_faculty = request.query.management_faculty;
        let user_role = request.query.user_role;
        console.log(user_name, management_faculty, user_role);

        if (!user_name) {
            utils_common.sendMessage(response, 1016, "参数传入有误")
            return
        }

        return sequelize.transaction(function (t) {
            return user_module.UserModel.update(
                {
                    user_role: user_role
                },
                {
                    where: {
                        user_name: user_name
                    }
                },
                { transaction: t }).then(function () {
                    return teacher_info.TeacheInfo.update(
                        {
                            management_faculty: management_faculty
                        },
                        {
                            where: {
                                user_name: user_name
                            }
                        },
                        { transaction: t });
                });
        }).then(function (results) {
            // Transaction 会自动提交
            // result 是事务回调中使用promise链中执行结果
            response.json({
                code: 200,
                message: '数据更新成功',
                data: results
            })
        }).catch(function (error) {
            utils_common.sendMessage(response, 1016, error)
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "编辑老师信息失败：" + error)
    }
}

module.exports = {
    update_teacher
}