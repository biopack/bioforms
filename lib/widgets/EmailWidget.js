"use strict";
const Widget_1 = require("./Widget");
class EmailWidget extends Widget_1.Widget {
    render(options) {
        let attributes = "";
        if (options && options.attr) {
            Object.keys(options.attr).forEach((attributeName, index, arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
            });
        }
        if (this.options.placeholder)
            attributes += ` placeholder="${this.options.placeholder}"`;
        return `<input name="${this.name}" type="email"${attributes}></input>`;
    }
}
exports.EmailWidget = EmailWidget;
