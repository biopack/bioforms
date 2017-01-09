
export class ValidatorError {

    private code: number
    private msg: string

    constructor(code: number, msg: string){
        this.code = code
        this.msg = msg
    }

    getCode(): number {
        return this.code
    }

    getMessage(): string {
        return this.msg
    }
}
