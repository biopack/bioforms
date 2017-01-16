import { Form } from "../Form";
export interface IValidator {
}
export declare class Validator<T> {
    protected form: Form;
    validate(data: any): T;
    setForm(form: Form): void;
}
