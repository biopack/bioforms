import * as Lodash from "lodash"
//
import { Widget, IWidget, widgetOptions } from "./Widget"

export interface choiceOptions extends widgetOptions {
    // choices: Array<string> | Array<{[key: string]: string}>
    choices: Array<string> | {[key: string]: string}
    multiple?: boolean
}

export class ChoiceWidget extends Widget<string | Array<string>> implements IWidget {

    private choiceOptions: choiceOptions

    constructor(options: choiceOptions){
        super(options)

        this.choiceOptions = options

        if(this.choiceOptions.multiple === undefined) this.choiceOptions.multiple = false
    }

    render(options?: any): string {
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        if(this.options.placeholder) attributes += ` placeholder="${this.options.placeholder}"`

        let elopt = ""
        if(Lodash.isArray(this.choiceOptions.choices)){
            this.choiceOptions.choices.forEach((opt: string, index: number, arr: Array<string>) => {
                elopt += `<option value="${opt}"${(opt === this.value ? ' selected="selected"' : '')}>${opt}</option>`
            })
        } else {
            Object.keys(this.choiceOptions.choices).forEach((opt: string, index: number, arr: Array<string>) => {
                let ch = <any>this.choiceOptions.choices
                elopt += `<option value="${opt}"${(opt === this.value ? ' selected="selected"' : '')}>${ch[opt]}</option>`
            })
        }

        if(this.choiceOptions.required) attributes += ` required="required"`
        if(this.choiceOptions.multiple) attributes += ` multiple="multiple"`

        return `<select name="${this.name}" type="number"${attributes}>${elopt}</select>`
    }

    setValue(value: string): void {
        this.value = value
    }
}
