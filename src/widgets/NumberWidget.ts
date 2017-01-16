
import { Widget, IWidget, widgetOptions } from "./Widget"

export class NumberWidget extends Widget<number> implements IWidget {

    constructor(options: widgetOptions){
        super(options)
    }

    render(options?: any): string {
        options = options || {}
        let attrs = Object.assign({},this.options.attr || {},options.attr || {})

        let attributes = ""
        Object.keys(attrs).forEach((attributeName,index,arr) => {
            attributes += ` ${attributeName}="${attrs[attributeName]}"`
        })

        if(this.options.placeholder) attributes += ` placeholder="${this.form.trans(this.options.placeholder)}"`
        if(this.options.required) attributes += ` required="required"`
        return `<input name="${this.name}" type="number"${attributes} value="${(this.value === undefined ? (this.default === undefined ? "" : this.default) : this.value)}"></input>`
    }

    setValue(value: number): void {
        this.value = value
    }
}
