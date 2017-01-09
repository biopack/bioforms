import { Widget, IWidget } from "./Widget";
export declare class EmailWidget extends Widget<string> implements IWidget {
    render(options?: any): string;
    setValue(value: string): void;
}
