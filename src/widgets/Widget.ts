
import { Validator } from "../validators/Validator"
import { ValidatorError } from "../validators/ValidatorError"
import { Form } from "../Form"

export interface widgetOptions {
    label?: string
    placeholder?: string
    validators?: Array<Validator<any>>
    required?: boolean
    attr?: {[key: string]: string | number}
}

export interface IWidget {
    render(): string
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

        if(this.options.label === undefined) this.options.label = ""
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
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        return `<label${attributes}>${this.options.label!}</label>`
    }

    getLabel(): string {
        return this.options.label!
    }

    setDefault(value: T): void {
        this.default = value
    }

    setValue(value: T): void {
        this.value = value
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
}
