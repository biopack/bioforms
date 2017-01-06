"use strict";
const Lodash = require("lodash");
const Widget_1 = require("./Widget");
class ChoiceWidget extends Widget_1.Widget {
    constructor(options) {
        super(options);
        this.choiceOptions = options;
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
        let elopt = "";
        if (Lodash.isArray(this.choiceOptions.choices)) {
            this.choiceOptions.choices.forEach((opt, index, arr) => {
                elopt += `<option value="${opt}"${(opt === this.value ? ' selected="selected"' : '')}>${opt}</option>`;
            });
        }
        else {
            Object.keys(this.choiceOptions.choices).forEach((opt, index, arr) => {
                let ch = this.choiceOptions.choices;
                elopt += `<option value="${opt}"${(opt === this.value ? ' selected="selected"' : '')}>${ch[opt]}</option>`;
            });
        }
        if (this.options.required)
            attributes += ` required="required"`;
        return `<select name="${this.name}" type="number"${attributes}>${elopt}</select>`;
    }
}
exports.ChoiceWidget = ChoiceWidget;
