
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"
import { trim, isInt } from "validator"

export interface validatorOptions {
    minMessage?: string
    maxMessage?: string
    invalidMessage?: string
    min?: number
    max?: number
}

export class RangeValidator extends Validator<number> implements IValidator {

    private minMessage: string = "This value should be %s or more"
    private maxMessage: string = "This value should be %s or less"
    private invalidMessage: string = "This value should be a valid number"
    private min: number = 0
    private max: number = Infinity

    constructor(options?: validatorOptions){
        super()

        if(options && options.minMessage !== undefined) this.minMessage = options.minMessage
        if(options && options.maxMessage !== undefined) this.maxMessage = options.maxMessage
        if(options && options.invalidMessage !== undefined) this.invalidMessage = options.invalidMessage
        if(options && options.min !== undefined) this.min = options.min
        if(options && options.max !== undefined) this.max = options.max
    }

    validate(data: any): number {
        data = trim(data.replace(/[^0-9]/gi,''))
        if(!isInt(data)) throw new ValidatorError(1,this.invalidMessage)
        if(data < this.min) throw new ValidatorError(2,this.minMessage)
        if(data > this.max) throw new ValidatorError(3,this.maxMessage)
        return <number>data
    }

}
