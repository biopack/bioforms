import { IValidator, Validator } from "./Validator";
export declare class EmailValidator extends Validator implements IValidator {
    constructor();
    validate<String>(data: string): string;
}
