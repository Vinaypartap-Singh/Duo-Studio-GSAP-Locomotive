var crsur = document.querySelector("#cursor");
var mainSection = document.querySelector("#main");

mainSection.addEventListener("mousemove", function (details) {
  crsur.style.top = details.y + "px";
  crsur.style.left = details.x + "px";
});

gsap.registerPlugin(ScrollTrigger);

let locoScroll;
locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  smartphone: {
    smooth: true,
  },
});
new ResizeObserver(() => locoScroll.update()).observe(
  document.querySelector("#main")
);

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

const heroText = new SplitType("#page1Content h1");
const featuredText = new SplitType("#featuredText");

gsap.to("#page1Heading1 .char, #page2Heading2 .char", {
  y: -30,
  stagger: 0.05,
  duration: 1,
  delay: 0.2,
});

const timelineNew = gsap.timeline();

timelineNew.to("#featuredText .line", {
  y: -60,
  stagger: 0.05,
  duration: 3,
  scrollTrigger: {
    trigger: "#featuredText .char",
    scroller: "#main",
    scrub: 2,
  },
});

timelineNew.to("#workVideo, #workImage", {
  y: -160,
  duration: 3,
  scrollTrigger: {
    trigger: "#workImage, #workVideo",
    scroller: "#main",
    scrub: 2,
  },
});

timelineNew.to("#workVideo2, #workImage2", {
  y: -160,
  duration: 3,
  scrollTrigger: {
    trigger: "#workImage2, #workVideo2",
    scroller: "#main",
    scrub: 2,
  },
});

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
    x: -160,
    filter: "blur(10px)",
  },
  "heroAnim"
);

tl.to(
  "#page2Heading2",
  {
    x: 160,
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

const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    start: "top -365%",
    end: "top -210%",
    scrub: 3,
  },
});

tl4.to("#main", {
  backgroundColor: "#0F0D0D",
  color: "white",
});
