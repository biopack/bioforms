import { Widget, IWidget, widgetOptions } from "./Widget";
export declare class EmailWidget extends Widget<string> implements IWidget {
    constructor(options: widgetOptions);
    render(options?: any): string;
    setValue(value: string): void;
}
