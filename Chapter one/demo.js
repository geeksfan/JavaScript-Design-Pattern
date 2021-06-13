
// TODO：第一章 我问你答
/**
 *1、真假对象实现链式调用
 * @return {*} 
 */
var checkObj = function () {
    return {
        checkName: function () {
            console.log("🚀 ~ file: demo.js ~ line 4 ~ checkObj ~ checkName");
            return this;
        },
        checkEmail: function () {
            console.log("🚀 ~ file: demo.js ~ line 8 ~ checkObj ~ checkEmail")
            return this;
        },
        checkPassword: function () {
            console.log("🚀 ~ file: demo.js ~ line 11 ~ checkObj ~ checkPassword")
            return this;
        }
    }
}
var a = checkObj();
a.checkEmail().checkName().checkPassword();

/**
 *2、实现为函数添加多个方法的addMethod方法
 */
Function.prototype.addMethod = function (name, fn) {
    this[name] = fn;
}

/**
 *定义某函数
 */
var check = function () { }
/**
 *某函数调用函数方法addMethod添加方法checkDemo
 */
check.addMethod('checkDemo', function () {
    console.log("🚀 ~ file: demo.js ~ line 25 ~ checkDemo");
})
/**
 *某函数调用函数方法addMethod添加方法checkDemo
 */
check.addMethod('checkMobile', function () {
    console.log("🚀 ~ file: demo.js ~ line 25 ~ checkMobile");
})
check.checkDemo();
check.checkMobile();
