const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    
    if (Validator.isEmpty(data.name)) {
        errors.name = "이름을 입력해주세요.";
    }
    
    if (Validator.isEmpty(data.email)) {
        errors.email = "이메일을 입력해주세요.";
    }
    else if (!Validator.isEmail(data.email)) {
        errors.email = "이메일 형식에 맞지 않습니다.";
    }
    
    if (Validator.isEmpty(data.password)) {
        errors.password = "비밀번호를 입력해주세요.";
    }

    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "재확인 비밀번호를 입력해주세요.";
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "6~30자 비밀번호를 입력하세요.";
    }

    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "비밀번호가 일치하지 않습니다.";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    };
};