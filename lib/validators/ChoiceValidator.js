"use strict";
const Validator_1 = require("./Validator");
const ValidatorError_1 = require("./ValidatorError");
const validator_1 = require("validator");
class ChoiceValidator extends Validator_1.Validator {
    constructor(options) {
        super();
        this.options = options || {};
        if (this.options.message === undefined)
            this.options.message = "The value you selected is not a valid choice";
        if (this.options.multipleMessage === undefined)
            this.options.multipleMessage = "One or more of the given values is invalid";
        if (this.options.minMessage === undefined)
            this.options.minMessage = "You must select at least %s choices";
        if (this.options.maxMessage === undefined)
            this.options.maxMessage = "You must select at most %s choices";
        if (this.options.multiple === undefined)
            this.options.multiple = false;
        if (this.options.min === undefined)
            this.options.min = 1;
        if (this.options.max === undefined)
            this.options.max = Infinity;
    }
    validate(data) {
        if (!Array.isArray(data))
            data = [data];
        if (!Array.isArray(this.options.choices))
            this.options.choices = Object.keys(this.options.choices);
        if (data.length < this.options.min)
            throw new ValidatorError_1.ValidatorError(3, this.options.minMessage);
        if (data.length > this.options.max)
            throw new ValidatorError_1.ValidatorError(4, this.options.maxMessage);
        data.forEach((d, i, a) => {
            if (!validator_1.isIn(d, this.options.choices)) {
                if (this.options.multiple)
                    throw new ValidatorError_1.ValidatorError(2, this.options.multipleMessage);
                else
                    throw new ValidatorError_1.ValidatorError(1, this.options.message);
            }
        });
        if (this.options.multiple)
            return data;
        return data[0];
    }
}
exports.ChoiceValidator = ChoiceValidator;
