function spoilerHeaderClick(e) {
  e.preventDefault();
  e.target.compSpoiler.toggle();
  console.log(e.target)
}


class Spoiler {
  element;

  constructor(element) {
    this.element = element;
    element.classList.add('spoiler');
    const a = element.querySelector('a.header');
    a.compSpoiler = this;
    console.log(this)
    a.addEventListener("click", spoilerHeaderClick);
  }
  toggle() {
    this.element.classList.toggle('shown')
  }
  get shown() {
    return this.element.classList.contains('shown');
  }
  set shown(value) {
    if(value) {
      if(!this.shown) this.toggle();
    }else {
      if(this.shown) this.toggle;
    }
  }
}


const spoiler = document.querySelector('.main')
const spoiler1 = new Spoiler(spoiler)