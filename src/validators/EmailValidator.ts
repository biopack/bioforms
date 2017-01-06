
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"

export class EmailValidator extends Validator implements IValidator {

    constructor(){
        super()
    }

    validate<String>(data: string): string {
        return data
    }

}
