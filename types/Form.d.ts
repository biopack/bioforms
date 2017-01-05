export declare const enum Method {
    GET = 0,
    POST = 1,
}
export interface FormOptions {
    name?: string;
    method?: Method;
}
export declare class Form {
    static Method: {
        GET: number;
        POST: number;
    };
    private name;
    private errors;
    private method;
    protected _widgets: any;
    constructor(options?: FormOptions);
    init(): void;
    readonly widgets: any;
    handleData(data: Object): void;
    isSubmittedAndValid(): boolean;
    getName(): string;
    getMethod(): string | void;
    renderStart(options?: any): string;
    renderEnd(): string;
}
