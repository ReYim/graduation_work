// sequelize 推荐文档 https://github.com/Jane-Mardan/sequelize-docs-Zh-CN
const Sequelize = require('sequelize')
const ConnectMySQL = require('../dataBase/mysql')

const StudentInfo = ConnectMySQL.define('student_info', {
    // 分管老师ID绑定到分管下的学生
    charger_teacher_id: {
        type: Sequelize.STRING,
        defaultValue: "暂无", // 此字段需要学生去更新
        allowNull: false // 不允许为空
    },
    user_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    student_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    faculty: {
        type: Sequelize.STRING,
        defaultValue: "暂无", // 此字段需要学生去更新
        allowNull: false
    },    
    // 性别 男|0 女|1
    gender: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 民族
    nation: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 身份证号码
    id_number: {
        type: Sequelize.STRING,
        // defaultValue: "", // 此字段需要学生去更新
        allowNull: true
    },
    // 专业
    major: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 宿舍地址
    dormitory_address: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 手机号
    phone_number: {
        type: Sequelize.STRING,
        // defaultValue: "", // 此字段需要学生去更新
        allowNull: true
    },
    // 生源地
    birth_place: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 生源类别 预科|0 内高|1
    source_category: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 是否参军 否|0 是|1 已报名|2
    join_army: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },

    // 家庭信息

    // 家庭地址
    home_address: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 户籍地址
    residence_address: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员1 姓名
    family_memeber_name_1: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员1 与本人关系
    family_memeber_relation_1: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员1 工作
    family_memeber_job_1: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员2 姓名
    family_memeber_name_2: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员2 与本人关系
    family_memeber_relation_2: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员2 工作
    family_memeber_job_2: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员3 姓名
    family_memeber_name_3: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员3 与本人关系
    family_memeber_relation_3: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员3 工作
    family_memeber_job_3: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员4 姓名
    family_memeber_name_4: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员4 与本人关系
    family_memeber_relation_4: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员4 工作
    family_memeber_job_4: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员5 姓名
    family_memeber_name_5: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员5 与本人关系
    family_memeber_relation_5: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭成员5 工作
    family_memeber_job_5: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },

    // 学业信息

    // 请假记录
    leave_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 休学记录
    suspension_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 转专业记录
    transfer_professional_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 获奖记录
    award_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 学业处分记录
    academic_disciplinary_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 受处分记录及等级
    disciplinary_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 受资助记录
    funded_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 兼职记录
    part_time_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 就业情况
    employment_status: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 延毕记录及原因
    extended_record: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 在校整体表现
    school_performance: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },

    // 其它信息

    // 家庭所在派出所及联系方式
    family_police_station: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭所在派出所及联系方式
    family_community_station: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 所持有出入境证类型
    passport_type: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 是否上交给学校 否|0 是|1
    password_turn_in_school: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 未上交原因
    password_not_turn_in_school: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },

})

module.exports = {
    StudentInfo
}