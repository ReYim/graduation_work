const teacher_info = require('../../models/teacher')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')

const Sequelize = require('sequelize');
const Op = Sequelize.Op;
/**
 * 获取管理老师信息 => 全部获取无传参
 */

let get_teacher = async function (request, response) {
    try {
        if (!request) {
            utils_common.sendMessage(response, 1015, '查询老师信息失败')
        }
        // sequelize 联合查询 依赖关系 详情 https://segmentfault.com/a/1190000011583752
        await user_module.UserModel.belongsTo(teacher_info.TeacheInfo, {
            foreignKey: 'user_name',
            targetKey: 'user_name',
        })
        let teacher_list = await user_module.UserModel.findAll({
            attributes: ['user_name', 'user_role', 'user_status', 'createdAt'],
            where: {
                    [Op.or]: [{user_role: 'teacher'}, {user_role: '0'}]
            },
            include: [{
                model: teacher_info.TeacheInfo,
                attributes: ['teacher_id', 'management_faculty'],
            }],
            // raw: true
        })
        response.json({
            code: 200,
            message: '获取老师信息成功',
            data: teacher_list
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "获取老师信息失败")
    }
}

module.exports = {
    get_teacher
}