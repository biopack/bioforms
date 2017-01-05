
import { Widget, IWidget } from "./Widget"

export class EmailWidget extends Widget implements IWidget {
    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        return `<input name="${this.name}" type="email"${attributes}></input>`
    }
}
