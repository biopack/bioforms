"use strict";
class Widget {
    constructor(options) {
        this.name = "";
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
    setValue(data) {
        this.value = data;
    }
    getValue() {
        return this.value;
    }
    setDefault(data) {
        this.value = data;
    }
}
exports.Widget = Widget;
