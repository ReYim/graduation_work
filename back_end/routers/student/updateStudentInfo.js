const student_info = require('../../models/student')
const user_module = require('../../models/user')
const utils_common = require('../../utils/common')

/**
 * 获取学生信息
 * params belong teacher_id 
 */

let update_student_info = async function (request, response) {
    try {
        let teacher_name = request.body.teacher_name; //学生要输入分管老师名称 以便信息绑定到分管老师 45
        let student_name = request.body.student_name; // 登陆状态数据中获取学生名请求参数
        let student_id = request.body.student_id; // 登陆状态数据中获取id请求参数

        let faculty = request.body.faculty;
        let gender = request.body.gender;
        let nation = request.body.nation;
        let id_number = request.body.id_number;
        let major = request.body.major;
        let dormitory_address = request.body.dormitory_address;
        let phone_number = request.body.phone_number;
        let birth_place = request.body.birth_place;
        let source_category = request.body.source_category;
        let join_army = request.body.join_army;
        let home_address = request.body.home_address;
        let residence_address = request.body.residence_address;
        let family_memeber_name_1 = request.body.family_memeber_name_1;
        let family_memeber_relation_1 = request.body.family_memeber_relation_1;
        let family_memeber_job_1 = request.body.family_memeber_job_1;
        let family_memeber_name_2 = request.body.family_memeber_name_2;
        let family_memeber_relation_2 = request.body.family_memeber_relation_2;
        let family_memeber_job_2 = request.body.family_memeber_job_2;
        let family_memeber_name_3 = request.body.family_memeber_name_3;
        let family_memeber_relation_3 = request.body.family_memeber_relation_3;
        let family_memeber_job_3 = request.body.family_memeber_job_3;
        let family_memeber_name_4 = request.body.family_memeber_name_4;
        let family_memeber_relation_4 = request.body.family_memeber_relation_4;
        let family_memeber_job_4 = request.body.family_memeber_job_4;
        let family_memeber_name_5 = request.body.family_memeber_name_5;
        let family_memeber_relation_5 = request.body.family_memeber_relation_5;
        let family_memeber_job_5 = request.body.family_memeber_job_5;
        let leave_record = request.body.leave_record;
        let suspension_record = request.body.suspension_record;
        let transfer_professional_record = request.body.transfer_professional_record;
        let award_record = request.body.award_record;
        let academic_disciplinary_record = request.body.academic_disciplinary_record;
        let disciplinary_record = request.body.disciplinary_record;
        let funded_record = request.body.funded_record;
        let part_time_record = request.body.part_time_record;
        let employment_status = request.body.employment_status;
        let extended_record = request.body.extended_record;
        let school_performance = request.body.school_performance;
        let family_police_station = request.body.family_police_station;
        let family_community_station = request.body.family_community_station;
        let passport_type = request.body.passport_type;
        let password_turn_in_school = request.body.password_turn_in_school;
        let password_not_turn_in_school = request.body.password_not_turn_in_school;

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
                charger_teacher_id: teacher_id.dataValues.user_name,
                student_name: student_name,
                faculty: faculty,
                student_id: student_id,
                gender: gender,
                nation: nation,
                id_number: id_number,
                major: major,
                dormitory_address: dormitory_address,
                phone_number: phone_number,
                birth_place: birth_place,
                source_category: source_category,
                join_army: join_army,
                home_address: home_address,
                residence_address: residence_address,
                family_memeber_name_1: family_memeber_name_1,
                family_memeber_relation_1: family_memeber_relation_1,
                family_memeber_job_1: family_memeber_job_1,
                family_memeber_name_2: family_memeber_name_2,
                family_memeber_relation_2: family_memeber_relation_2,
                family_memeber_job_2: family_memeber_job_2,
                family_memeber_name_3: family_memeber_name_3,
                family_memeber_relation_3: family_memeber_relation_3,
                family_memeber_job_3: family_memeber_job_3,
                family_memeber_name_4: family_memeber_name_4,
                family_memeber_relation_4: family_memeber_relation_4,
                family_memeber_job_4: family_memeber_job_4,
                family_memeber_name_5: family_memeber_name_5,
                family_memeber_relation_5: family_memeber_relation_5,
                family_memeber_job_5: family_memeber_job_5,
                leave_record: leave_record,
                suspension_record: suspension_record,
                transfer_professional_record: transfer_professional_record,
                award_record: award_record,
                academic_disciplinary_record: academic_disciplinary_record,
                disciplinary_record: disciplinary_record,
                funded_record: funded_record,
                part_time_record: part_time_record,
                employment_status: employment_status,
                extended_record: extended_record,
                school_performance: school_performance,
                family_police_station: family_police_station,
                family_community_station: family_community_station,
                passport_type: passport_type,
                password_turn_in_school: password_turn_in_school,
                password_not_turn_in_school: password_not_turn_in_school,
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