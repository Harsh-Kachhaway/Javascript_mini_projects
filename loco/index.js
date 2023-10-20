const tl = gsap.timeline({
    default: {
        duration: 1
    }
})

tl.from(".boxs", {
    x: "100%",
    stagger: .1,
    duration: .5,

})
tl.from(".na", {
    y: -100,
    stagger: .1,
    duration: .5,

})
    .from(".scroll", {
        y: -10,
        // stagger:.1,
        duration: .5,
        repeat: -1,
        yoyo: .5

    })
    .from(".coehed", {
        opacity: 0,
        duration: 1

    })
    .from(".coehed", {
        x: -20,
        // y:10,
        // stagger:.1,
        duration: 2,
        repeat: -1,
        yoyo: .5,
        color: "white",

    }, "<-.5")
    .from(".coehed", {
        // x:-20,
        y: 10,
        // stagger:.1,
        duration: 5,
        repeat: -1,
        yoyo: .5

    }, "<")
    .from(".img", {
        
        opacity: 0,
        duration: 1,
    }, "<1")
    .from(".scroll", {
        opacity: 0
        
    })
    .from(".imagetwo", {
        opacity: 0,
        duration: 1
        
    },"<")
    .from(".imagetwo ", {
        x: -20,
        // y:10,
        // stagger:.1,
        duration: 2,
        repeat: -1,
        yoyo: .5,
        color: "white",
        scale:".9"
        
    }, "<-.5")
    .from(".imagetwoe", {
        // x:-20,
        y: 10,
        // stagger:.1,
        duration: 5,
        repeat: -1,
        yoyo: .5,
        scale:"1.1"

    }, "<")
    .from(".imageone", {
        opacity: 0,
        duration: 1

    },"<")
    .from(" .imageone", {
        x: -20,
        // y:10,
        // stagger:.1,
        duration: 3,
        repeat: -1,
        yoyo: .5,
        color: "white",
        scale:".9"
        
    }, "<-.5")
    .from(" .imageone", {
        // x:-20,
        y: 10,
        // stagger:.1,
        duration: 4,
        repeat: -1,
        yoyo: .5,
        scale:"1.1"
        
    }, "<")
    
    
    const tltwo = gsap.timeline({
        scrollTrigger: {
        trigger: ".containertwo",
        // markers:true,
        start: "top bottom",
        end: "0% 0%",
        scrub: 1
        
    }
})
tltwo.to(".img", {
    y: 750,
    x: -400,
    // duration:2,
})
    .to(".containertwo", {
        backgroundColor: "#1a344b"
    }, "<")



//timeline three
const tlthree = gsap.timeline({
    scrollTrigger: {
        trigger: ".containertwo",
        // markers:true,
        start: "top 5%",
        end: "top -5%",
        scrub: 1

    }
})
tlthree.to("nav", {
    color: "white"
})

//timeline four
const tlfour = gsap.timeline({
    scrollTrigger: {
        trigger: ".containerthree",
        // markers: true,
        start: "top 90%",
        end: "top 10%",
        scrub: 1

    }
})

tlfour.from(".oneone", {
    y: 200,
    x: "-100%",
    rotation: -90,
    width: "200%"



})
    .from(".ithr", {
        y: 200,
        x: "100%",
        rotation: 90,
        width: "200%"



    }, "<")
    .from(".one , .two , .three", {
        // y:200,
        // x:"100%",
        // rotation:90
        opacity: 0



    }, "<")
    tlfour.to(".img", {
        y: "330%",
        x: 0,
        height: "60%",
        // x:"-100%",
        // rotation:90
        // opacity: 0



    }, "<")

