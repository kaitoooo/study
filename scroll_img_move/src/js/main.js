import '../styles/style.scss';
import picturefill from 'picturefill';
picturefill();
import simpleParallax from 'simple-parallax-js';
import smoothScroll from 'smooth-scroll';
import Scroll from './modules/scroll';


export default class App {
  constructor() {
    window.onload = () => {
      this.init();
    };
    window.addEventListener('scroll', () => {
      this.fadeIn();
    });
  }
  init() {
      this.parallax();
      this.smoothScroll();
  }
  fadeIn(){
    const fadeInItem01 = new Scroll('.fadeout');
    const fadeInItem02 = new Scroll('.fadeout2');
  }
  parallax(){
    var imageRight = document.querySelectorAll('.parallax__right');
    new simpleParallax(imageRight, {
        orientation: 'right'
    });

    var imageLeft = document.querySelectorAll('.parallax__left');
    new simpleParallax(imageLeft, {
        orientation: 'left'
    });
  }
  smoothScroll() {
    new smoothScroll('a[href*="#"]', {
      speed: 400,
      offset: 0,
      easing: 'easeInOutCubic',
      updateURL: false,
    });
  }
}
new App();
