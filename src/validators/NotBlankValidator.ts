
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"

export class NotBlankValidator extends Validator implements IValidator {

    messages = [
        "The value of field must not be empty."
    ]

    constructor(){
        super()
    }

    validate<String>(data: string): string {
        if(data === "" || data === null || data === undefined || (Array.isArray(data) && data.length === 0)) throw new ValidatorError(1,this.messages[0])
        return data
    }

}
