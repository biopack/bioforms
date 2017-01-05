
import { Widget, IWidget } from "./Widget"

export class TextWidget extends Widget implements IWidget {
    init(){

    }

    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`
        return `<input name="${this.name}" type="text"${attributes}></input>`
    }
}
