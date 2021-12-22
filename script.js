function spoilerHeaderClick(e) {
  e.preventDefault();
  e.target.compSpoiler.toggle();
}


class Spoiler {
  element;

  constructor(element) {
    this.element = element;
    element.classList.add('spoiler');
    const a = element.querySelector('button.header');
    a.compSpoiler = this;
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


const spoiler = document.querySelector('#first')
// const spoiler1 = new Spoiler(spoiler)
// spoiler1.shown = false