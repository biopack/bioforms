import { IValidator, Validator } from "./Validator";
export declare class NotBlankValidator extends Validator implements IValidator {
    messages: string[];
    constructor();
    validate<String>(data: string): string;
}
