
import { Widget, IWidget, widgetOptions } from "./Widget"

export class TextWidget extends Widget<string> implements IWidget {

    constructor(options: widgetOptions){
        super(options)

        this.default = ""
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
        return `<input name="${this.name}" type="text"${attributes} value="${(this.value === undefined ? this.default : this.value)}"></input>`
    }

    setValue(value: string): void {
        this.value = value
    }
}
