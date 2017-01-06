
import { IValidator, Validator } from "./Validator"

interface validatorOptons {
    min?: number
    max?: number
}

export class LengthValidator extends Validator implements IValidator {

    constructor(){
        super()
    }

    validate<String>(data: string): string {
        return data
    }

}
