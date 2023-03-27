'use strict'

//Получаем значение скролла по У от  windows
window.addEventListener('scroll', e => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});

const planetBg = document.querySelector('.first-space-section__planet_01');
window.addEventListener('mousemove', e => {
  let x = e.clientX / window.innerWidth;
  let y = e.clientY / window.innerHeight;

  planetBg.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
});

const thirdSection = document.querySelector('.third-space-section');

for(let i = 1; i < 41; i++){
  let classTitle = 'third-space-section__fly-light_' + String(i);

  let newDiv = document.createElement('div');
  newDiv.className = 'third-space-section__fly-light ' + classTitle;

  thirdSection.append(newDiv)
}
