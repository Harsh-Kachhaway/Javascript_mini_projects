gsap.registerPlugin(ScrollTrigger);

gsap.to("#box",{
    x:1000,
    duration:3,
    scrollTrigger:{
        trigger:"#box",
        start: "top 500",
        end:"top 200",
        markers:{
            startColor:"rgb(231, 0, 39)",
            endColor:"rgb(83, 83, 193)" ,
            fontSize:"1.5rem",
            indent:1300
        },
        // scrub:0,
        pin:"true",
        pinSpacing:false,
        // toggleClass:"red",
        toggleActions:"play pause reverse reset"

    }
    
})
gsap.to("#box2",{
    x:1000,
    duration:3,
    scrollTrigger:{
        trigger:"#box2",
        start: "top 400",
        end:"top 100",
        markers:{
            startColor:"black",
            endColor:"black" ,
            fontSize:"1.5rem",
            indent:1300
        },
        // scrub:0,
        pin:"true",
        pinSpacing:false,
        // toggleClass:"red",
        toggleActions:"play pause reverse reset"

    }
    
})