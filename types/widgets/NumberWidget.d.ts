import { Widget, IWidget } from "./Widget";
export declare class NumberWidget extends Widget<number> implements IWidget {
    render(options?: any): string;
    setValue(value: number): void;
}
