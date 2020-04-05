const student_info = require('../../models/student')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')

/**
 * 获取学生信息
 * params belong teacher_id 
 */

let update_student_info = async function (request, response) {
    try {
        let teacher_name = request.body.teacher_name; //学生要输入分管老师名称 以便信息绑定到分管老师

        let student_name = request.body.student_name; // 登陆状态数据中获取学生名请求参数
        let student_id = request.body.student_id; // 登陆状态数据中获取id请求参数

        let student_faculty = request.body.student_faculty;
        let home_address = request.body.home_address;
        let student_awards = request.body.student_awards;
        if (!teacher_name || !student_name) {
            utils_common.sendMessage(response, 1016, '参数传入有误')
            return
        }
        let teacher_id = await user_module.UserModel.findOne({
            attributes: ['user_name'],
            where: {
                user_name: teacher_name,
                user_role: 'teacher',
            },
        })
        console.log(teacher_id.dataValues.user_name);
        let update_info = await student_info.StudentInfo.update(
            {
                student_name: student_name,
                student_id: student_id,
                student_faculty: student_faculty,
                home_address: home_address,
                student_awards: student_awards,
                charger_teacher_id: teacher_id.dataValues.user_name,
            },
            {
                where: {
                    user_name: student_name,
                    student_id: student_id
                }
            })

        response.json({
            code: 200,
            message: '修改学生信息成功！',
            data: update_info
        })

    } catch (error) {
        utils_common.sendMessage(response, 1015, "更新学生信息接口捕获错误 " + error)
    }
}

module.exports = {
    update_student_info
}