class Food {
    private x: number
    private y: number

    constructor() {
        const dom: HTMLElement = document.getElementById('food')!
        this.x = dom.offsetLeft
        this.y = dom.offsetTop
    }
}