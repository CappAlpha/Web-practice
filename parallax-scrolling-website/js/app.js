window.addEventListener('scroll', (e) => {
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
}); //Конкатенация позиции скролла
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content',
});
