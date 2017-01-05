import { Widget, IWidget } from "./Widget";
export declare class TextWidget extends Widget implements IWidget {
    init(): void;
    render(options?: any): string;
}
