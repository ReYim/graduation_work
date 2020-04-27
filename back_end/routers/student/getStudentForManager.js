const student_info = require('../../models/student')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')

/**
 * 获取学生信息
 * params belong teacher_id 
 */

let get_student_for_manager = async function (request, response) {
    try {
        if (!request) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }
        // sequelize 联合查询 依赖关系 详情 https://segmentfault.com/a/1190000011583752
        await user_module.UserModel.belongsTo(student_info.StudentInfo, {
            foreignKey: 'user_name',
            targetKey: 'user_name',
        })
        let student_list = await user_module.UserModel.findAll({
            attributes: ['user_name', 'user_role', 'user_status', 'createdAt'],
            where: {
                user_role: 'student'
            },
            include: [{
                model: student_info.StudentInfo,
                // attributes: ['student_id', 'student_faculty', 'home_address', 'student_awards', 'charger_teacher_id'],
            }],
            // raw: true
        })
        response.json({
            code: 200,
            message: '获取学生信息成功！',
            data: student_list
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "获取学生信息接口捕获错误 " + error)
    }
}

module.exports = {
    get_student_for_manager
}