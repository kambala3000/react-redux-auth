import Validator from 'validator';

export default function validateInput(data) {
    let errors = {};
    if (Validator.isEmpty(data.login)) {
        errors.login = 'This field is required';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'This field is required';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Invalid email';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'This field is required';
    }
    if (Validator.isEmpty(data.passwordConfirm)) {
        errors.passwordConfirm = 'This field is required';
    }
    if (!Validator.equals(data.password, data.passwordConfirm)) {
        errors.passwordConfirm = 'Passwords must match';
    }
    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'This field is required';
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};