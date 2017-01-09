import { IValidator, Validator } from "./Validator";
export interface validatorOptons {
    message?: string;
    multipleMessage?: string;
    minMessage?: string;
    maxMessage?: string;
    multiple?: boolean;
    choices: Array<string> | {
        [key: string]: string;
    };
    min?: number;
    max?: number;
}
export declare class ChoiceValidator extends Validator<Array<string> | string> implements IValidator {
    private options;
    constructor(options: validatorOptons);
    validate(data: any): Array<string> | string;
}
