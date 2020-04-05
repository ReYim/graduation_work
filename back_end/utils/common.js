
class common_utils {

  static end(res) {
    res.json({
      message: 'end handle'
    })
    return
  }

  static getUserRoleByCode(code) {
    if (code == '0') {return 'admin'}
    if (code == '1') { return 'xingzheng_teacher'}
    if (code == '2') { return 'jiaoyan_teacher'}
  }

  static sendMessage(res, code, message) {
    res.json({
      code: code || '',
      message: message
    })
  } 

  static isEmpty(data) {
    let data_type = typeof data
    switch (data_type) {
      case 'object' : return data === null || Object.keys(data).length === 0
      case 'string' : return data.length === 0
      case 'undefined' : return true
      default: return false
    }
  }

  static isNumber(str) {
    var re = /^[0-9]*[1-9][0-9]*$/ //判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/;//判断字符串是否为数字//判断正整数/[1−9]+[0−9]∗]∗/
　　return re.test(str)
  }

  static isValuablePage(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
  }

  static isValuableSize(str) {
    var n = Math.floor(Number(str));
    return n !== Infinity && String(n) === str && n > 0;
  }
  
  static isValuebalePhone(str) {
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    return myreg.test(str)
  }

  static isValuableEmail(str) {
    var reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return reg.test(str)
  }
  
}


module.exports = common_utils

