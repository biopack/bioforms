import { IValidator, Validator } from "./Validator";
export interface validatorOptions {
    message?: string;
}
export declare class NotBlankValidator extends Validator<string | number | Array<string>> implements IValidator {
    private message;
    constructor(options?: validatorOptions);
    validate(data: any): string | number | Array<string>;
}
