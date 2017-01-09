"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
const validator_1 = require("validator");
class EmailValidator extends Validator_1.Validator {
    constructor(options) {
        super();
        this.options = options || {};
        if (this.options.message === undefined)
            this.options.message = "This value is not a valid email address";
    }
    validate(data) {
        data = validator_1.trim(data);
        if (!validator_1.isEmail(data))
            throw new ValidatorError_1.ValidatorError(1, this.options.message);
        return data;
    }
}
exports.EmailValidator = EmailValidator;
