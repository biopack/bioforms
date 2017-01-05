export interface widgetOptions {
    label?: string;
    placeholder?: string;
}
export interface IWidget {
    render(): string;
}
export declare class Widget {
    protected options: widgetOptions;
    constructor(options?: widgetOptions);
    renderLabel(options?: any): string;
}
