import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const scrollAddClass = (
  className: string = ".js-scrollAddClass",
  start: string = "50%"
) => {
  document.querySelectorAll(className).forEach((el) => {
    ScrollTrigger.create({
      trigger: el,
      start: `top ${start}`,
      toggleClass: { targets: el, className: "is-active" },
      once: true,
      // markers: true
    });
  });
};

export const scrollParallax = (
  className: string,
  axis: "x" | "y",
  from: number,
  to: number,
  start: string = "100%",
  end: string = "0%"
) => {
  gsap.utils.toArray(className).forEach((el) => {
    gsap.fromTo(
      el as gsap.TweenTarget,
      {
        [axis]: from,
      },
      {
        [axis]: to,
        scrollTrigger: {
          trigger: el as gsap.DOMTarget,
          start: `top ${start}`,
          end: `bottom ${end}`,
          scrub: true,
          // markers: true
        },
      }
    );
  });
};
