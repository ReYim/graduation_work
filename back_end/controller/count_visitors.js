

/**
 * TO DO 访问量计数中间件
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

const count_visitors_controller = function(req, res, next) {
    // console.log("中间件输出req",req);
    // var count =100;
    // console.log('请求次数计数：\n',count);
    next()
    return
}

module.exports = count_visitors_controller