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

var crsur = document.querySelector("#cursor");
var mainSection = document.querySelector("#main");

mainSection.addEventListener("mousemove", function (details) {
  crsur.style.top = details.y + "px";
  crsur.style.left = details.x + "px";
});

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
    width: "80%",
    duration: 2,
    marginTop: "-700px",
    zIndex: 11,
  },
  "heroAnim"
);

var timeline2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1Heading1",
    scroller: "#main",
    duration: 3,
    start: "top -20%",
    scrub: 2,
  },
});

timeline2.to("#main", {
  backgroundColor: "white",
  color: "black",
});

timeline2.to(".page2-info, .page2-info-last", {
  borderColor: "black",
});
