"use strict";
const Widget_1 = require("./Widget");
class TextWidget extends Widget_1.Widget {
    init() {
    }
    render(options) {
        let attributes = "";
        if (options && options.attr) {
            Object.keys(options.attr).forEach((attributeName, index, arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
            });
        }
        if (this.options.placeholder)
            attributes += ` placeholder="${this.options.placeholder}"`;
        return `<input name="${this.name}" type="text"${attributes}></input>`;
    }
}
exports.TextWidget = TextWidget;
