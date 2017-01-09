import { IValidator, Validator } from "./Validator";
export interface validatorOptions {
    minMessage?: string;
    maxMessage?: string;
    invalidMessage?: string;
    min?: number;
    max?: number;
}
export declare class RangeValidator extends Validator<number> implements IValidator {
    private minMessage;
    private maxMessage;
    private invalidMessage;
    private min;
    private max;
    constructor(options?: validatorOptions);
    validate(data: any): number;
}
