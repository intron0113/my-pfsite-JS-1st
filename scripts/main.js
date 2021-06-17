document.addEventListener('DOMContentLoaded', function () {
  const main = new Main();
});

class Main {
  constructor() {
    this.header = document.querySelector('.header');
    this._observers = [];
    this._init();
  }
  set observers(val) {
    this._observers.push(val);
  }

  get observers() {
    return this._observers;
  }

  _init() {
    new MobileMenu();
    this._scrollInit();
    Pace.on('done',this._paceDone.bind(this));
  }

  _paceDone(){
    this._scrollInit();
  }

  _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  }

  _navAnimation(el, inview) {
    if (inview) {
      this.header.classList.remove('triggered');
    } else {
      this.header.classList.add('triggered');
    }
  }

  _textAnimation(el, inview) {
    if (isIntersecting) {
      const ta = new TweenTextAnimation(el);
      ta.animate();
    }
  }

  _scrollInit() {
    this.observers = new ScrollObserver(
      '.nav-trigger',
      this._navAnimation.bind(this),
      {
        once: false,
      }
    );

    this.observers =
      new ScrollObserver('.cover-slide', this._inviewAnimation)
    
    this.observers =
      new ScrollObserver('.tween-animate-title', this._textAnimation)
    console.log(this.observers);
  }
}
