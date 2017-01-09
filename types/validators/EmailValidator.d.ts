import { IValidator, Validator } from "./Validator";
export interface validatorOptions {
    message?: string;
}
export declare class EmailValidator extends Validator<string> implements IValidator {
    private options;
    constructor(options?: validatorOptions);
    validate(data: any): string;
}
