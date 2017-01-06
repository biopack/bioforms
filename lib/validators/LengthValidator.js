"use strict";
const Validator_1 = require("./Validator");
class LengthValidator extends Validator_1.Validator {
    constructor() {
        super();
    }
    validate(data) {
        return data;
    }
}
exports.LengthValidator = LengthValidator;
