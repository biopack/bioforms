
import { Validator } from "../validators/Validator"

export interface widgetOptions {
    label?: string
    placeholder?: string
    validators?: Array<Validator>
    required?: boolean
}

export interface IWidget {
    render(): string
    // setValue<T>(value: T): void
    // getValue<T>(): T
    // setDefault<T>(value: T): void
}

export class Widget {

    protected name: string = ""
    protected options: widgetOptions
    protected value: any

    constructor(options?: widgetOptions) {
        this.options = options || {}

        if(this.options.required === undefined) this.options.required = true
    }

    get validators(): Array<Validator> {
        return this.options.validators || []
    }

    setName(name: string): void {
        this.name = name
    }

    renderLabel(options?: any): string {
        let label = this.options.label || ""
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        return `<label${attributes}>${label}</label>`
    }

    setValue<T>(data: T): void {
        this.value = data
    }

    getValue<T>(): T {
        return this.value
    }

    setDefault<T>(data: T): void {
        this.value = data
    }
    //
    // render(){ return "" }
    // setValue<String | array>(value: string | Array<string>): void {  }
    // setValue<array>(data: Array<string>): void { }
    // setDefault<String>(value: string){  }
    // getValue<String>(): string { return "" }
}
