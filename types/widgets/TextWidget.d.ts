import { Widget, IWidget } from "./Widget";
export declare class TextWidget extends Widget<string> implements IWidget {
    render(options?: any): string;
    setValue(value: string): void;
}
