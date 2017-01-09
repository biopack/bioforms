"use strict";
const Widget_1 = require("./Widget");
class NumberWidget extends Widget_1.Widget {
    render(options) {
        let attributes = "";
        if (options && options.attr) {
            Object.keys(options.attr).forEach((attributeName, index, arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
            });
        }
        if (this.options.placeholder)
            attributes += ` placeholder="${this.options.placeholder}"`;
        if (this.options.required)
            attributes += ` required="required"`;
        return `<input name="${this.name}" type="number"${attributes} value="${(this.value === undefined ? "" : this.value)}"></input>`;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.NumberWidget = NumberWidget;
