export declare const enum Method {
    GET = 0,
    POST = 1,
}
export interface FormOptions {
    method?: Method;
}
export declare class Form {
    static Method: {
        GET: number;
        POST: number;
    };
    private name;
    constructor(name: string, options?: FormOptions);
    handleData(data: Object): void;
    isSubmittedAndValid(): boolean;
}
