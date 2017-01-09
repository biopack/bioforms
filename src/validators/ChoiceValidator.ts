
import { IValidator, Validator } from "./Validator"
import { ValidatorError } from "./ValidatorError"
import { isIn } from "validator"

export interface validatorOptons {
    message?: string
    multipleMessage?: string
    minMessage?: string
    maxMessage?: string
    multiple?: boolean
    choices: Array<string> | {[key: string]: string}
    min?: number
    max?: number
}

export class ChoiceValidator extends Validator<Array<string> | string> implements IValidator {

    private options: validatorOptons

    constructor(options: validatorOptons){
        super()

        this.options = options || {}
        if(this.options.message === undefined) this.options.message = "The value you selected is not a valid choice"
        if(this.options.multipleMessage === undefined) this.options.multipleMessage = "One or more of the given values is invalid"
        if(this.options.minMessage === undefined) this.options.minMessage = "You must select at least %s choices"
        if(this.options.maxMessage === undefined) this.options.maxMessage = "You must select at most %s choices"
        if(this.options.multiple === undefined) this.options.multiple = false
        if(this.options.min === undefined) this.options.min = 1
        if(this.options.max === undefined) this.options.max = Infinity
    }

    validate(data: any): Array<string> | string {
        if(!Array.isArray(data)) data = [data]
        if(!Array.isArray(this.options.choices)) this.options.choices = Object.keys(this.options.choices)

        if(data.length < this.options.min) throw new ValidatorError(3,this.options.minMessage!)
         if(data.length > this.options.max) throw new ValidatorError(4,this.options.maxMessage!)

        data.forEach((d: string, i: number, a: Array<string>) => {
            if(!isIn(d,<Array<string>>this.options.choices)){
                if(this.options.multiple) throw new ValidatorError(2,this.options.multipleMessage!)
                else throw new ValidatorError(1,this.options.message!)
            }
        })

        if(this.options.multiple) return data
        return data[0]
    }

}
