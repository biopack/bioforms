
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"
import { trim } from "validator"

export interface validatorOptons {
    minMessage?: string
    maxMessage?: string
    exactlyMessage?: string
    min?: number
    max?: number
}

export class LengthValidator extends Validator<string> implements IValidator {

    private minMessage = "This value is too short. It should have %s characters or more"
    private maxMessage = "This value is too long. It should have %s characters or less"
    private exactlyMessage = "This value should have exactly %s characters"
    private min = 0
    private max = Infinity

    constructor(options?: validatorOptons){
        super()

        if(options && options.minMessage !== undefined) this.minMessage = options.minMessage
        if(options && options.maxMessage !== undefined) this.maxMessage = options.maxMessage
        if(options && options.exactlyMessage !== undefined) this.exactlyMessage = options.exactlyMessage
    }

    validate(data: string): string {
        data = trim(data)
        if(data.length < this.min) throw new ValidatorError(1,this.minMessage)
        if(data.length > this.max) throw new ValidatorError(2,this.maxMessage)
        if(this.min === this.max && this.min !== data.length) throw new ValidatorError(3,this.form.trans(this.exactlyMessage))
        return <string>data
    }

}
