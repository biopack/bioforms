"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
const validator_1 = require("validator");
class NotBlankValidator extends Validator_1.Validator {
    constructor(options) {
        super();
        this.message = "This value should not be blank";
        if (options && options.message !== undefined)
            this.message = options.message;
    }
    validate(data) {
        if (data === "" || data === null || data === undefined || (Array.isArray(data) && data.length === 0))
            throw new ValidatorError_1.ValidatorError(1, this.form.trans(this.message));
        return validator_1.trim(data);
    }
}
exports.NotBlankValidator = NotBlankValidator;
