
import { Validator } from "../validators/Validator"
import { ValidatorError } from "../validators/ValidatorError"
import { Form } from "../Form"

export interface widgetOptions {
    label?: string
    placeholder?: string
    validators?: Array<Validator<any>>
    required?: boolean
}

export interface IWidget {
    render(): string
    // setValue<T>(value: T): void
    // getValue<T>(): T
    // setDefault<T>(value: T): void
}

export abstract class Widget<T> {

    protected name: string = ""
    protected options: widgetOptions
    protected value: T
    protected default: T
    protected form: Form
    protected errors: Array<ValidatorError> = []

    constructor(options?: widgetOptions) {
        this.options = options || {}

        if(this.options.required === undefined) this.options.required = true
    }

    get validators(): Array<Validator<any>> {
        return this.options.validators || []
    }

    setName(name: string): void {
        this.name = name
    }

    setForm(form: Form): void {
        this.form = form
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


    setDefault(value: T): void {

    }

    setValue(value: T): void {

    }

    getValue(): T {
        return this.value
    }

    addError(error: ValidatorError): void {
        this.errors.push(error)
    }

    getErrors(): Array<ValidatorError> {
        return this.errors
    }

    /*
    setValue(value: number): void
    setValue(value: string): void
    setValue(value: any): void {  }

    getValue(): string
    getValue(): Array<string>
    getValue(): number
    getValue(): any { }

    setDefault(data: any): void { }
    */

    //
    // render(){ return "" }
    // setValue<String | array>(value: string | Array<string>): void {  }
    // setValue<array>(data: Array<string>): void { }
    // setDefault<String>(value: string){  }
    // getValue<String>(): string { return "" }
}
