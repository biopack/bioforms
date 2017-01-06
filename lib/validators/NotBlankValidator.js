"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
class NotBlankValidator extends Validator_1.Validator {
    constructor() {
        super();
        this.messages = [
            "The value of field must not be empty."
        ];
    }
    validate(data) {
        if (data === "" || data === null || data === undefined || (Array.isArray(data) && data.length === 0))
            throw new ValidatorError_1.ValidatorError(1, this.messages[0]);
        return data;
    }
}
exports.NotBlankValidator = NotBlankValidator;
