
import { Widget, IWidget } from "./Widget"

export class ChoiceWidget extends Widget implements IWidget {
    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        return `<select name="${this.name}" type="number"${attributes}></select>`
    }
}
