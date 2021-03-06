"use strict";
const Widget_1 = require("./Widget");
class PasswordWidget extends Widget_1.Widget {
    constructor(options) {
        super(options);
    }
    render(options) {
        options = options || {};
        let attrs = Object.assign({}, this.options.attr || {}, options.attr || {});
        let attributes = "";
        Object.keys(attrs).forEach((attributeName, index, arr) => {
            attributes += ` ${attributeName}="${attrs[attributeName]}"`;
        });
        if (this.options.placeholder)
            attributes += ` placeholder="${this.form.trans(this.options.placeholder)}"`;
        if (this.options.required)
            attributes += ` required="required"`;
        return `<input name="${this.name}" type="password"${attributes}></input>`;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.PasswordWidget = PasswordWidget;
