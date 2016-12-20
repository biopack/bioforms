export const enum Method {
    GET,
    POST
}

export interface FormOptions {
    method?: Method
}

export class Form {

    static Method = {
        GET: 0,
        POST: 1
    }

    private name: string

    constructor(name: string, options?: FormOptions){
        this.name = name || this.constructor.name
    }

    handleData(data: Object): void {

    }

    isSubmittedAndValid(): boolean {
        return false
    }
}
