import { IValidator, Validator } from "./Validator";
export declare class ChoiceValidator extends Validator implements IValidator {
    constructor();
    validate<Array>(data: Array): Array;
}
