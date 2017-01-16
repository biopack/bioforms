"use strict";
class Widget {
    constructor(options) {
        this.name = "";
        this.errors = [];
        this.options = options || {};
        if (this.options.label === undefined)
            this.options.label = "";
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
        this.validators.forEach(validator => {
            validator.setForm(form);
        });
    }
    renderLabel(options) {
        let attributes = "";
        if (options && options.attr) {
            Object.keys(options.attr).forEach((attributeName, index, arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
            });
        }
        return `<label${attributes}>${this.form.trans(this.options.label)}</label>`;
    }
    getLabel() {
        return this.options.label;
    }
    setDefault(value) {
        this.default = value;
    }
    setValue(value) {
        this.value = value;
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
