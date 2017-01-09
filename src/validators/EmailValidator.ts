
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"
import { isEmail, trim } from "validator"

export interface validatorOptions {
    message?: string
}

export class EmailValidator extends Validator<string> implements IValidator {

    private options: validatorOptions

    constructor(options?: validatorOptions){
        super()

        this.options = options || {}
        if(this.options.message === undefined) this.options.message = "This value is not a valid email address"
    }

    validate(data: any):string {
        data = trim(data)
        if(!isEmail(data)) throw new ValidatorError(1,this.options.message!)
        return <string>data
    }
}
