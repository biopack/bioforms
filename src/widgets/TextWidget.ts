
import { Widget, IWidget } from "./Widget"

export class TextWidget extends Widget implements IWidget {
    init(){

    }

    render(): string {
        return `<input name="" type="text"></input>`
    }
}
