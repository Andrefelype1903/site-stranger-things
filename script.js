let textoSplit = document.querySelectorAll(".texto-split");

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

ScrollSmoother.create({
  smooth: 1.5,
  effects: true,
});

const animarPagina = () => {
  gsap.from(".hero", {
    opacity: 0,
    duration: 1.5,
  });

  gsap.from("picture:nth-child(2)", {
    y: 70,
    duration: 1,
  });

  gsap.from("picture:nth-child(1)", {
    y: -70,
    duration: 1,
  });

  gsap.from(".titulo", {
    x: -500,
    duration: 2,
  });

  gsap.from(".cidade", {
    opacity: 0,
    stagger: 0.3,
    filter: "blur(5px)",
    y: 30,
    scrollTrigger: {
      trigger: ".cidade-destino",
      markers: false,
      start: "0%, 80%",
      end: "100%, 60%",
      scrub: true,
    },
  });

  gsap.from(".agradecimentos ul li", {
    opacity: 0,
    filter: "blur(10px)",
    y: 50,
    stagger: 0.05,
    scrollTrigger: {
      trigger: ".agradecimentos ul",
      markers: false,
      start: "0%, 90%",
      end: "100%, 60%",
      scrub: 2,
    },
  });

  gsap.from("footer", {
    y: "-25%",
    immediateRender: false,
    scrollTrigger: {
      trigger: "footer",
      markers: false,
      end: "100% 100%",
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });

  textoSplit.forEach((textoUnicoSplit) => {
    const split = SplitText.create(textoUnicoSplit, {
      type: "lines, words, chars",
      // mask: "lines",
    });

    gsap.from(split.chars, {
      y: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.3,
      stagger: 0.05,
      scrollTrigger: {
        trigger: textoUnicoSplit,
      },
    });
  });
};

const tl = gsap.timeline({
  onComplete() {
    animarPagina()
    gsap.to(".pre-loader", {
      opacity: 0,
      display: "none",
    });
  },
});

tl.to(".pre-loader path", {
  strokeDashoffset: 0,
  duration: 2,
});

tl.to(".pre-loader path", {
  strokeDashoffset: 0,
  fill: "rgb(169, 22, 22)",
  duration: 1,
});
