"use strict";
const ValidatorError_1 = require("./validators/ValidatorError");
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
})(exports.Method || (exports.Method = {}));
var Method = exports.Method;
class Form {
    constructor(options) {
        this._widgets = {};
        this.options = options || {};
        if (this.options.name === undefined)
            this.options.name = this.constructor.name;
        if (this.options.method === undefined)
            this.options.method = 0;
        if (this.options.debug === undefined)
            this.options.debug = false;
        this.init();
        Object.keys(this.widgets).forEach((key, index, arr) => {
            this.widgets[key].setName(key);
            this.widgets[key].setForm(this);
        });
    }
    init() {
    }
    get widgets() {
        return this._widgets;
    }
    handleData(data) {
        if (this.options.debug) {
            console.log(`===================================== FORM DATA ===========================================`);
            console.log(this.options.name);
            console.log(data);
            console.log(`===========================================================================================`);
        }
        Object.keys(this.widgets).forEach((widgetName, index, arr) => {
            console.log(`add ${widgetName} : value: ${data[widgetName]}`);
            let widget = this.widgets[widgetName];
            widget.setValue(data[widgetName]);
            console.log(`SETED: ${widget.getValue()}`);
        });
    }
    isValid() {
        let valid = true;
        this.errors = {};
        Object.keys(this.widgets).forEach((widgetName, index, arr) => {
            let widget = this.widgets[widgetName];
            widget.validators.forEach((validator, index, arr) => {
                try {
                    widget.setValue(validator.validate(widget.getValue()));
                }
                catch (err) {
                    valid = false;
                    if (err instanceof ValidatorError_1.ValidatorError) {
                        widget.addError(err);
                        this.errors[widgetName] = widget.getErrors();
                    }
                }
            });
        });
        return valid;
    }
    getName() {
        if (this.options.name !== undefined)
            return this.options.name;
        return "";
    }
    getMethod() {
        if (this.options.method === 1)
            return 'post';
        return 'get';
    }
    getErrors() {
        return this.errors;
    }
    renderStart(options) {
        options = options || {};
        let attributes = "";
        if (options.attr)
            Object.keys(options.attr).forEach((key, index, len) => {
                attributes += ` ${key}="${options.attr[key]}"`;
            });
        return `<form name="${this.getName()}" method="${this.getMethod()}"${attributes}>`;
    }
    renderEnd() {
        return '</form>';
    }
}
Form.Method = {
    GET: 0,
    POST: 1
};
exports.Form = Form;
