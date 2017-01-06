import { IValidator, Validator } from "./Validator";
export declare class LengthValidator extends Validator implements IValidator {
    constructor();
    validate<String>(data: string): string;
}
