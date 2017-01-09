"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
const validator_1 = require("validator");
class RangeValidator extends Validator_1.Validator {
    constructor(options) {
        super();
        this.minMessage = "This value should be %s or more";
        this.maxMessage = "This value should be %s or less";
        this.invalidMessage = "This value should be a valid number";
        this.min = 0;
        this.max = Infinity;
        if (options && options.minMessage !== undefined)
            this.minMessage = options.minMessage;
        if (options && options.maxMessage !== undefined)
            this.maxMessage = options.maxMessage;
        if (options && options.invalidMessage !== undefined)
            this.invalidMessage = options.invalidMessage;
        if (options && options.min !== undefined)
            this.min = options.min;
        if (options && options.max !== undefined)
            this.max = options.max;
    }
    validate(data) {
        data = validator_1.trim(data.replace(/[^0-9]/gi, ''));
        if (!validator_1.isInt(data))
            throw new ValidatorError_1.ValidatorError(1, this.invalidMessage);
        if (data < this.min)
            throw new ValidatorError_1.ValidatorError(2, this.minMessage);
        if (data > this.max)
            throw new ValidatorError_1.ValidatorError(3, this.maxMessage);
        return data;
    }
}
exports.RangeValidator = RangeValidator;
