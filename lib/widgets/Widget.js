"use strict";
class Widget {
    constructor(options) {
        this.name = "";
        this.errors = [];
        this.options = options || {};
        if (this.options.required === undefined)
            this.options.required = true;
    }
    get validators() {
        return this.options.validators || [];
    }
    setName(name) {
        this.name = name;
    }
    setForm(form) {
        this.form = form;
    }
    renderLabel(options) {
        let label = this.options.label || "";
        let attributes = "";
        if (options && options.attr) {
            Object.keys(options.attr).forEach((attributeName, index, arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
            });
        }
        return `<label${attributes}>${label}</label>`;
    }
    setDefault(value) {
    }
    setValue(value) {
    }
    getValue() {
        return this.value;
    }
    addError(error) {
        this.errors.push(error);
    }
    getErrors() {
        return this.errors;
    }
}
exports.Widget = Widget;
