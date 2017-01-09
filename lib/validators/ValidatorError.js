"use strict";
class ValidatorError {
    constructor(code, msg) {
        this.code = code;
        this.msg = msg;
    }
    getCode() {
        return this.code;
    }
    getMessage() {
        return this.msg;
    }
}
exports.ValidatorError = ValidatorError;
