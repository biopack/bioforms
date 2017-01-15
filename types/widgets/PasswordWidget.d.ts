import { Widget, IWidget, widgetOptions } from "./Widget";
export declare class PasswordWidget extends Widget<string> implements IWidget {
    constructor(options: widgetOptions);
    render(options?: any): string;
    setValue(value: string): void;
}
