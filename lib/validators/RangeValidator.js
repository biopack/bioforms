"use strict";
const Validator_1 = require("./Validator");
class RangeValidator extends Validator_1.Validator {
    constructor() {
        super();
    }
    validate(data) {
        return data;
    }
}
exports.RangeValidator = RangeValidator;
