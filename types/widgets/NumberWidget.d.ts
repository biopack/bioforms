import { Widget, IWidget, widgetOptions } from "./Widget";
export declare class NumberWidget extends Widget<number> implements IWidget {
    constructor(options: widgetOptions);
    render(options?: any): string;
    setValue(value: number): void;
}
