
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"
import { trim } from "validator"

export interface validatorOptions {
    message?: string
}

export class NotBlankValidator extends Validator<string | number | Array<string>> implements IValidator {

    private message = "This value should not be blank"

    constructor(options?: validatorOptions){
        super()

        if(options && options.message !== undefined) this.message = options.message
    }

    validate(data: any): string | number | Array<string> {
        if(data === "" || data === null || data === undefined || (Array.isArray(data) && data.length === 0)) throw new ValidatorError(1,this.message)
        return trim(data)
    }
}
