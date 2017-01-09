
export interface IValidator {
    // validate(data: any): T
}

export class Validator<T> {
    validate(data: any): T {
        return <T>data
    }
}
