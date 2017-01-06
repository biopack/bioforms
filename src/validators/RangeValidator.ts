
import { IValidator, Validator } from "./Validator"

export class RangeValidator extends Validator implements IValidator {

    constructor(){
        super()
    }

    validate<String>(data: string): string {
        return data
    }

}
