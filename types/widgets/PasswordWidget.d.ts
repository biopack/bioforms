import { Widget, IWidget } from "./Widget";
export declare class PasswordWidget extends Widget<string> implements IWidget {
    render(options?: any): string;
    setValue(value: string): void;
}
