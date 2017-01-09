export declare class ValidatorError {
    private code;
    private msg;
    constructor(code: number, msg: string);
    getCode(): number;
    getMessage(): string;
}
