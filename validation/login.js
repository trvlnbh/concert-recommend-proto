const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    
    if (Validator.isEmpty(data.email)) {
        errors.email = "이메일을 입력해주세요.";
    }
    else if (!Validator.isEmail(data.email)) {
        errors.email = "이메일 형식에 맞지 않습니다.";
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "비밀번호를 입력해주세요.";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};