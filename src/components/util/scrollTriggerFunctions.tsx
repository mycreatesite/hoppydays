import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAddClass = () => {
  document.querySelectorAll(".js-scrollAddClass").forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: "top 60%",
      toggleClass: { targets: el, className: "is-active" },
      once: true,
      // markers: true
    });
  });
};

export const scrollParallaxLtR = () => {
  gsap.utils.toArray(".js-scrollParallaxLtR").forEach((target) => {
    gsap.fromTo(target as gsap.TweenTarget, {
      x: -50,
    },{
      x: 50,
      scrollTrigger: {
        trigger: target as gsap.DOMTarget,
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
      },
    });
  });
};
