import { Validator } from "../validators/Validator";
export interface widgetOptions {
    label?: string;
    placeholder?: string;
    validators?: Array<Validator>;
    required?: boolean;
}
export interface IWidget {
    render(): string;
}
export declare class Widget {
    protected name: string;
    protected options: widgetOptions;
    protected value: any;
    constructor(options?: widgetOptions);
    readonly validators: Array<Validator>;
    setName(name: string): void;
    renderLabel(options?: any): string;
    setValue<T>(data: T): void;
    getValue<T>(): T;
    setDefault<T>(data: T): void;
}
