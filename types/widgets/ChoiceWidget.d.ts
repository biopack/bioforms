import { Widget, IWidget, widgetOptions } from "./Widget";
export interface choiceOptions extends widgetOptions {
    choices: Array<string> | {
        [key: string]: string;
    };
    multiple?: boolean;
}
export declare class ChoiceWidget extends Widget<string | Array<string>> implements IWidget {
    private choiceOptions;
    constructor(options: choiceOptions);
    render(options?: any): string;
    setValue(value: string): void;
}
