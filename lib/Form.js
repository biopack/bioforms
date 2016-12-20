"use strict";
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
})(exports.Method || (exports.Method = {}));
var Method = exports.Method;
class Form {
    constructor(name, options) {
        this.name = name || this.constructor.name;
    }
    handleData(data) {
    }
    isSubmittedAndValid() {
        return false;
    }
}
Form.Method = {
    GET: 0,
    POST: 1
};
exports.Form = Form;
