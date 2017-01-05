export interface widgetOptions {
    label?: string;
    placeholder?: string;
}
export interface IWidget {
    render(): string;
}
export declare class Widget {
    protected name: string;
    protected options: widgetOptions;
    constructor(options?: widgetOptions);
    setName(name: string): void;
    renderLabel(options?: any): string;
}
