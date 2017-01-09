"use strict";
const Lodash = require("lodash");
const Widget_1 = require("./Widget");
class ChoiceWidget extends Widget_1.Widget {
    constructor(options) {
        super(options);
        this.choiceOptions = options;
        if (this.choiceOptions.multiple === undefined)
            this.choiceOptions.multiple = false;
    }
    render(options) {
        options = options || {};
        let attrs = Object.assign({}, this.options.attr || {}, options.attr || {});
        let attributes = "";
        Object.keys(attrs).forEach((attributeName, index, arr) => {
            attributes += ` ${attributeName}="${options.attr[attributeName]}"`;
        });
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
        if (this.options.placeholder)
            attributes += ` placeholder="${this.options.placeholder}"`;
        if (this.choiceOptions.required)
            attributes += ` required="required"`;
        if (this.choiceOptions.multiple)
            attributes += ` multiple="multiple"`;
        return `<select name="${this.name}" type="number"${attributes}>${elopt}</select>`;
    }
    setValue(value) {
        this.value = value;
    }
}
exports.ChoiceWidget = ChoiceWidget;
