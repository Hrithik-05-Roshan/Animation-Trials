
console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: 4,
        markers: false,
      },
    })
    .to("img", {
      scale: 2,
      z: 350,
      force3D: true,
      transformOrigin: "center center",
      ease: "power1.inOut",
    })
    .to(
      ".section.hero",
      {
        scale: 1.1,
        transformOrigin: "center center",
        ease: "power1.inOut",
      },
      "<",
    );
});
