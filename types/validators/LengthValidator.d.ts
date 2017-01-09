import { IValidator, Validator } from "./Validator";
export interface validatorOptons {
    minMessage?: string;
    maxMessage?: string;
    exactlyMessage?: string;
    min?: number;
    max?: number;
}
export declare class LengthValidator extends Validator<string> implements IValidator {
    private minMessage;
    private maxMessage;
    private exactlyMessage;
    private min;
    private max;
    constructor(options?: validatorOptons);
    validate(data: string): string;
}
