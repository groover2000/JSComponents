class Spoiler3 extends Spoiler2 {
    static init(options, ...anchors) {
        let el, 
        spoilers = [], 
        sp;
        for(let i = 0; i <= anchors.length; i++) {
            el = document.querySelector(`#${anchors[i]}`);
            console.log(el)
            if(el) {
                sp = new Spoiler3(el, options);
                spoilers.push(sp);
            }
        }
        return spoilers;

    }
}

const spl = Spoiler3.init({shown : true, colorize : true}, 'first', 'second')