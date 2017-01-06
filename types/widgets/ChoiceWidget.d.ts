import { Widget, IWidget, widgetOptions } from "./Widget";
export interface choiceOptions extends widgetOptions {
    choices: Array<string> | {
        [key: string]: string;
    };
}
export declare class ChoiceWidget extends Widget implements IWidget {
    private choiceOptions;
    constructor(options: choiceOptions);
    render(options?: any): string;
}
