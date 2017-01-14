"use strict";
const Widget_1 = require("./Widget");
class EmailWidget extends Widget_1.Widget {
    render(options) {
        options = options || {};
        let attrs = Object.assign({}, this.options.attr || {}, options.attr || {});
        let attributes = "";
        Object.keys(attrs).forEach((attributeName, index, arr) => {
            attributes += ` ${attributeName}="${attrs[attributeName]}"`;
        });
        if (this.options.placeholder)
            attributes += ` placeholder="${this.options.placeholder}"`;
        if (this.options.required)
            attributes += ` required="required"`;
        return `<input name="${this.name}" type="email"${attributes} value="${(this.value === undefined ? "" : this.value)}"></input>`;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.EmailWidget = EmailWidget;
