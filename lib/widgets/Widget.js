"use strict";
class Widget {
    constructor(options) {
        this.name = "";
        this.options = options || {};
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
}
exports.Widget = Widget;
