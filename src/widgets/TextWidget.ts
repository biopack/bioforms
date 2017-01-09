
import { Widget, IWidget } from "./Widget"

export class TextWidget extends Widget<string> implements IWidget {

    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        if(this.options.required) attributes += ` required="required"`
        return `<input name="${this.name}" type="text"${attributes} value="${(this.value === undefined ? "" : this.value)}"></input>`
    }

    setValue(value: string): void {
        this.value = value
    }
}
