import { Validator } from "../validators/Validator";
import { ValidatorError } from "../validators/ValidatorError";
import { Form } from "../Form";
export interface widgetOptions {
    label?: string;
    placeholder?: string;
    validators?: Array<Validator<any>>;
    required?: boolean;
    attr?: {
        [key: string]: string | number;
    };
}
export interface IWidget {
    render(): string;
}
export declare abstract class Widget<T> {
    protected name: string;
    protected options: widgetOptions;
    protected value: T;
    protected default: T;
    protected form: Form;
    protected errors: Array<ValidatorError>;
    constructor(options?: widgetOptions);
    readonly validators: Array<Validator<any>>;
    setName(name: string): void;
    setForm(form: Form): void;
    renderLabel(options?: any): string;
    getLabel(): string;
    setDefault(value: T): void;
    setValue(value: T): void;
    getValue(): T;
    addError(error: ValidatorError): void;
    getErrors(): Array<ValidatorError>;
}
