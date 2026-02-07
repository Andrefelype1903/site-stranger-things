gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText);

ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

gsap.from(".hero", {
    opacity: 0,
    duration: 1.5
})

gsap.from("picture:nth-child(2)", {
    y:70,
    duration:1
})

gsap.from("picture:nth-child(1)", {
    y:-70,
    duration:1
})

gsap.from(".titulo", {
    x:-500,
    duration:2
})

gsap.from(".cidade", {
    opacity:0,
    stagger:0.3,
    filter:"blur(5px)",
    y:30,
    scrollTrigger:{
        trigger: ".cidade-destino",
        markers: false,
        start:"0%, 80%",
        end:"100%, 60%",
        scrub: true,
    }
})

gsap.from(".agradecimentos ul li", {
    opacity:0,
    filter: "blur(10px)",
    y:50,
    stagger:0.05,
    scrollTrigger:{
        trigger: ".agradecimentos ul",
        markers: false,
        start:"0%, 90%",
        end:"100%, 60%",
        scrub: 2
    }
})

gsap.from("footer", {
    y:-200,
    immediateRender: false,
    scrollTrigger: {
        trigger:"footer",
        markers: false,
        end: "98% 100%",
        scrub: 1,
        invalidateOnRefresh: true,

    }
})