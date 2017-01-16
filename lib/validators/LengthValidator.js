"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
const validator_1 = require("validator");
class LengthValidator extends Validator_1.Validator {
    constructor(options) {
        super();
        this.minMessage = "This value is too short. It should have %s characters or more";
        this.maxMessage = "This value is too long. It should have %s characters or less";
        this.exactlyMessage = "This value should have exactly %s characters";
        this.min = 0;
        this.max = Infinity;
        if (options && options.minMessage !== undefined)
            this.minMessage = options.minMessage;
        if (options && options.maxMessage !== undefined)
            this.maxMessage = options.maxMessage;
        if (options && options.exactlyMessage !== undefined)
            this.exactlyMessage = options.exactlyMessage;
    }
    validate(data) {
        data = validator_1.trim(data);
        if (data.length < this.min)
            throw new ValidatorError_1.ValidatorError(1, this.minMessage);
        if (data.length > this.max)
            throw new ValidatorError_1.ValidatorError(2, this.maxMessage);
        if (this.min === this.max && this.min !== data.length)
            throw new ValidatorError_1.ValidatorError(3, this.form.trans(this.exactlyMessage));
        return data;
    }
}
exports.LengthValidator = LengthValidator;
