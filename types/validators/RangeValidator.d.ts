import { IValidator, Validator } from "./Validator";
export declare class RangeValidator extends Validator implements IValidator {
    constructor();
    validate<String>(data: string): string;
}
