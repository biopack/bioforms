
import { Widget } from "./widgets/Widget"
import { ValidatorError } from "./validators/ValidatorError"

export const enum Method {
    GET,
    POST
}

export interface FormOptions {
    name?: string
    method?: Method
    debug?: boolean
    translate?: any
}

export class Form {

    static Method = {
        GET: 0,
        POST: 1
    }

    private options: FormOptions
    private errors: {[key: string]: Array<ValidatorError>}
    protected _widgets: {[key: string]: Widget<any>} = {}

    constructor(options?: FormOptions){
        this.options = options || {} as FormOptions
        if(this.options.name === undefined) this.options.name = this.constructor.name
        if(this.options.method === undefined) this.options.method = Method.GET
        if(this.options.debug === undefined) this.options.debug = false

        this.init()

        Object.keys(this.widgets).forEach((key,index,arr) => {
            this.widgets[key].setName(key)
            this.widgets[key].setForm(this)
        })
    }

    init(): void {

    }

    get widgets(): {[key: string]: Widget<any>} {
        return this._widgets
    }

    handleData(data: any): void {
        if(this.options.debug){
            console.log(`===================================== FORM DATA ===========================================`)
            console.log(this.options.name)
            console.log(data)
            console.log(`===========================================================================================`)
        }

        Object.keys(this.widgets).forEach((widgetName,index,arr) => {
            let widget = this.widgets[widgetName]
            widget.setValue(data[widgetName])
        })
    }

    isValid(): boolean {
        let valid = true
        this.errors = {}
        Object.keys(this.widgets).forEach((widgetName,index,arr) => {
            let widget = this.widgets[widgetName]
            widget.validators.forEach((validator,index,arr) => {
                try {
                    widget.setValue(validator.validate(widget.getValue()))
                } catch(err){
                    valid = false
                    if(err instanceof ValidatorError){
                        widget.addError(err)
                        this.errors[widgetName] = widget.getErrors()
                    }
                }
            })
        })
        return valid
    }

    getName(): string {
        if(this.options.name !== undefined) return this.options.name
        return ""
    }

    getMethod(): string {
        if(this.options.method === Method.POST) return 'post'
        return 'get'
    }

    getErrors(): {[key: string]: Array<ValidatorError>} {
        return this.errors
    }

    getData(): {[key: string]: any} {
        let data: {[key: string]: any} = {}
        Object.keys(this.widgets).forEach((widgetName,index,arr) => {
            data[widgetName] = <any>this.widgets[widgetName].getValue()
        })
        return data
    }

    /* render methods */

    renderStart(options?: any): string {
        options = options || {}
        let attributes = ""
        if(options.attr)
            Object.keys(options.attr).forEach((key,index,len) => {
                attributes += ` ${key}="${options.attr[key]}"`
            })
        return `<form name="${this.getName()}" method="${this.getMethod()}"${attributes}>`
    }

    renderEnd(): string {
        return '</form>'
    }
}
