"use strict";
(function (Method) {
    Method[Method["GET"] = 0] = "GET";
    Method[Method["POST"] = 1] = "POST";
})(exports.Method || (exports.Method = {}));
var Method = exports.Method;
class Form {
    constructor(options) {
        this.method = 0;
        this._widgets = {};
        this.name = this.constructor.name;
        if (options !== undefined) {
            if (options.name)
                this.name = options.name;
            if (options.method)
                this.method = options.method;
        }
        this.init();
        Object.keys(this.widgets).forEach((key, index, arr) => {
            this.widgets[key].setName(key);
        });
    }
    init() {
    }
    get widgets() {
        return this._widgets;
    }
    handleData(data) {
        console.log("=====================================FORM DATA===========================================");
        console.log(data);
        console.log("================================================================================");
    }
    isValid() {
        Object.keys(this.widgets).forEach((widgetName, index, arr) => {
            let widget = this.widgets[widgetName];
            widget.validators.forEach((validator, index, arr) => {
            });
        });
        return false;
    }
    getName() {
        return this.name;
    }
    getMethod() {
        if (this.method === 0)
            return 'get';
        if (this.method === 1)
            return 'post';
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
