
export interface widgetOptions {
    label?: string
    placeholder?: string
}

export interface IWidget {
    render(): string
}

export class Widget {

    protected options: widgetOptions

    constructor(options?: widgetOptions) {
        this.options = options || {}
    }

    renderLabel(options?: any): string {
        let label = this.options.label || ""
        return `<label>${label}</label>`
    }
}
