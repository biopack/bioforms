
import { IValidator, Validator } from "./Validator"

export class ChoiceValidator extends Validator implements IValidator {

    constructor(){
        super()
    }

    validate<Array>(data: Array): Array {
        return data
    }

}
