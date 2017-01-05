
export interface widgetOptions {
    label?: string
    placeholder?: string
}

export interface IWidget {
    render(): string
}

export class Widget {

    protected name: string = ""
    protected options: widgetOptions

    constructor(options?: widgetOptions) {
        this.options = options || {}
    }

    setName(name: string): void {
        this.name = name
    }

    renderLabel(options?: any): string {
        let label = this.options.label || ""
        let attributes = ""
        if(options && options.attr){
            Object.keys(options.attr).forEach((attributeName,index,arr) => {
                attributes += ` ${attributeName}="${options.attr[attributeName]}"`
            })
        }
        return `<label${attributes}>${label}</label>`
    }
}
