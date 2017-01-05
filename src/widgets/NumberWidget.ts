
import { Widget, IWidget } from "./Widget"

export class NumberWidget extends Widget implements IWidget {
    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        return `<input name="${this.name}" type="number"${attributes}></input>`
    }
}
