const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
    let errors ={};

    //check the email field
    if (isEmpty(data.email)){
        errors.email = `Email field cannot be empty`;
    }
    if(!Validator.isEmail(data.email)){
        errors.email = `${data.email} is invalid, please provide a valid email`;
    }
    //check name field
    if(isEmpty(data.name)){
        errors.name = "name field cannot be empty";
    }
    if(!Validator.isLength(data.name, { min: 2, max: 30 })){
        errors.name = "name must be between 2 and 30 characters long";
    }


    //check password field
    if(isEmpty(data.password)){
        errors.password = "Password field cannot be empty";
    }
    if(!Validator.isLength(data.password, { min: 6, max: 150 })){
        errors.password = "Password must be between 6 and 150 characters long";
    }

    //check confirm password
    if(isEmpty(data.confirmPassword)){
        errors.confirmPassword = 'Confirm Pasword field cannot be empty';
    }
    if(!Validator.equals(data.password, data.confirmPassword)){
        errors.confirmPassword = 'Password and Confirm Password field must match';
    }

    return {errors, isValid: isEmpty(errors),}
};

module.exports = validateRegisterInput;