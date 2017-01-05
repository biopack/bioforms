export const enum Method {
    GET,
    POST
}

export interface FormOptions {
    name?: string
    method?: Method
}

export class Form {

    static Method = {
        GET: 0,
        POST: 1
    }

    private name: string
    private errors: Array<string>
    private method: Method = Method.GET
    protected _widgets: any = {}

    constructor(options?: FormOptions){
        this.name = this.constructor.name

        if(options !== undefined){
            if(options.name) this.name = options.name
            if(options.method) this.method = options.method
        }

        this.init()
    }

    init(): void {

    }

    // protected set widgets(widget: any){
        // this._widgets
    // }

    get widgets(): any {
        return this._widgets
    }

    handleData(data: Object): void {

    }

    isSubmittedAndValid(): boolean {
        return false
    }

    getName(): string {
        return this.name
    }

    getMethod(): string | void {
        if(this.method === Method.GET) return 'get'
        if(this.method === Method.POST) return 'post'
    }

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
