class Spoiler2 extends Spoiler {
    onToggle

    constructor(element, options = {}) {
        super(element);
        const shown = options.shown || false;
        const colorize = options.colorize || false;
        this.shown = shown;
        if(colorize) {
            element.classList.add('colorize')
        }
    }
    toggle() {
        super.toggle();
        if(this.onToggle instanceof Function) {
            this.onToggle()
        }
    }
}


const spoiler2 = document.querySelector("#second");
// spoiler3 = new Spoiler2(spoiler2, {colorize: true})
