import { Widget } from "./widgets/Widget";
import { ValidatorError } from "./validators/ValidatorError";
export declare const enum Method {
    GET = 0,
    POST = 1,
}
export interface Translate {
    object: any;
    method: string;
}
export interface FormOptions {
    name?: string;
    method?: Method;
    debug?: boolean;
    translate?: {
        (text: string, subs?: any): string;
    } | Translate;
}
export declare class Form {
    static Method: {
        GET: number;
        POST: number;
    };
    private options;
    private errors;
    protected _widgets: {
        [key: string]: Widget<any>;
    };
    constructor(options?: FormOptions);
    trans(text: string, subs?: any): string;
    private translate(text, subs?);
    init(): void;
    readonly widgets: {
        [key: string]: Widget<any>;
    };
    handleData(data: any): void;
    isValid(): boolean;
    getName(): string;
    getMethod(): string;
    getErrors(): {
        [key: string]: Array<ValidatorError>;
    };
    getData(): {
        [key: string]: any;
    };
    renderStart(options?: any): string;
    renderEnd(): string;
}
