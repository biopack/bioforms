
import { Widget, IWidget } from "./Widget"

export class PasswordWidget extends Widget<string> implements IWidget {

    render(options?: any): string {
        options = options || {}
        let attrs = Object.assign({},this.options.attr || {},options.attr || {})

        let attributes = ""
        Object.keys(attrs).forEach((attributeName,index,arr) => {
            attributes += ` ${attributeName}="${attrs[attributeName]}"`
        })

        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        if(this.options.required) attributes += ` required="required"`
        return `<input name="${this.name}" type="password"${attributes}></input>`
    }

    setValue(value: string): void {
        this.value = value
    }
}
