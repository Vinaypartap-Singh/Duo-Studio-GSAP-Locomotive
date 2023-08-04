// (function () {
//   const scroll = new LocomotiveScroll({
//     el: document.querySelector("#main"),
//     smooth: true,
//     smoothMobile: false,
//   });
//   new ResizeObserver(() => scroll.update()).observe(
//     document.querySelector("#main")
//   );
// })();

gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1Heading1",
    scroller: "#main",
    start: "top 20%",
    end: "top 0",
    scrub: 2,
  },
});

tl.to(
  "#page1Heading1",
  {
    x: -120,
    filter: "blur(10px)",
  },
  "heroAnim"
);

tl.to(
  "#page2Heading2",
  {
    x: 120,
    filter: "blur(10px)",
  },
  "heroAnim"
);

tl.to(
  "#page1Content p",
  {
    x: 10,
    filter: "blur(10px)",
  },
  "heroAnim"
);

tl.to(
  "#videoContainer video",
  {
    width: "90%",
    marginTop: "-700px",
    zIndex: 11,
  },
  "heroAnim"
);
