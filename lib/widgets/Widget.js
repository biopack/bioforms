"use strict";
class Widget {
    constructor(options) {
        this.options = options || {};
    }
    renderLabel(options) {
        let label = this.options.label || "";
        return `<label>${label}</label>`;
    }
}
exports.Widget = Widget;
