const Sequelize = require('sequelize')
const ConnectMySQL = require('../dataBase/mysql')

const StudentInfo = ConnectMySQL.define('student_info', {
    // 基本信息字段 测试阶段，暂时这些数据，后续完善
    user_name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    student_faculty: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 家庭信息字段
    home_address: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 详情信息字段
    student_awards: {
        type: Sequelize.STRING,
        defaultValue: "", // 此字段需要学生去更新
        allowNull: false
    },
    // 分管老师ID绑定到分管下的学生
    charger_teacher_id: {
        type: Sequelize.STRING,
        defaultValue: 0, // 此字段需要学生去更新
        allowNull: false
    }

})

module.exports = {
    StudentInfo
}