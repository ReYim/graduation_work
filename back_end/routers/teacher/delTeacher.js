const teacher_info = require('../../models/teacher')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')
const ConnectMySQL = require('../../dataBase/mysql')
const sequelize = ConnectMySQL;

/**
 * 删除管理老师信息
 * 传参user_name
 */

let del_teacher = async function (request, response) {
    try {
        if (!request.query) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }
        let user_name = request.query.user_name;
        return sequelize.transaction(function (t) {
            return user_module.UserModel.destroy({
                where: {
                    user_name: user_name
                }
            }, { transaction: t }).then(function () {
                return teacher_info.TeacheInfo.destroy({
                    where: {
                        user_name: user_name
                    }
                }, { transaction: t });
            });
        }).then(result => {
            response.json({
                code: 200,
                message: '删除老师成功',
                data: result
            })
        }).catch(function (error) {
            utils_common.sendMessage(response, 1017, "删除老师失败!" + error)
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "删除老师信息接口捕获错误 " + error)
    }
}

module.exports = {
    del_teacher
}