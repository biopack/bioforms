
import { Form } from "../Form"

export interface IValidator {
    // validate(data: any): T
}

export class Validator<T> {

    protected form: Form

    validate(data: any): T {
        return <T>data
    }

    setForm(form: Form): void {
        this.form = form
    }
}
