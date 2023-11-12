const coursor = document.querySelector(".mouse");

window.addEventListener("mousemove",function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y)

    coursor.style.left = `${x}px`;
    coursor.style.top = `${y}px`;
    // coursor.style.backgroundColor = "red"
})

const sone = document.querySelector(".sone");
const stwo = document.querySelector(".stwo");
const sthree = document.querySelector(".sthree");
const sfour = document.querySelector(".sfour");
const sfive = document.querySelector(".sfive");
// f element = document.querySelector(".s");
for (let i = 0; i < 100; i++) {
    let num = 0;
if(num = 0){
    sone.style.visibility = "visible"
    num++
    console.log("he")
}
else if(num = 1){
    stwo.style.visibility = "visible"
    num++
}
else if(num = 2){
    sthree.style.visibility = "visible"
    num++
}
else if(num = 3){
    sfour.style.visibility = "visible"
    console.log("he")
    num++
}
else if(num = 4){
    sfive.style.visibility = "visible"
    num++
}
else if(num = 5){
    sone.style.visibility = "visible"
    num = 0
}}


let tl = gsap.timeline({
    defaults: {
        duration: 4,
    },
    scrollTrigger: {
        trigger: ".section",
        // markers:true,
        start: "bottom bottom",
        end: "bottom 0%",
        scrub: 1,
        pin: true

    }
})

tl.from(".trees", {
    scale: 20,
    x: 2700,
    y: 500

})
    .from(".clif2", {
        scale: 20,
        // x:-200,
        y: 5000
    }, "<")
    .from(".moon", {
        scale: 1.1,
    }, "<")
    .from(".castle", {
        scale: 1.1,
        x: 200,
        y: 100
    }, "<")
    .from(".clif", {
        scale: 1.1,
        x: -200,
        y: 100
    }, "<")
    .from(".background", {
        y: 100,

    }, "<")
    .to(".witch", {
        x: 1650,
        duration: 10,
        scale: 0.5,
        y: -100
    }, "<")
    .to(".strep", {
        x: 1200,
        duration: 5,
    }, "<.8")

let tltwo = gsap.timeline({
    defaults: {
        duration: 1,
    },
    scrollTrigger: {
        trigger: ".sectiontwo",
        // markers: true,
        start: "0% 50%",
        end: "0% 0%",
        scrub: 1,
        // pin:true

    }
})
tltwo.to(".blank", {
    y: -500

})
    .from(".imgs", {
        scale: 10,

    }, "<")
    .from(".headspecial", {
        scale: 10,
        opacity: 0

    }, "<1")
    .from(".headoffer", {
        // scale: 10,
        opacity: 0,
        scale: 0,
        y: 700

    })
    .from(".offerbtn", {
        // scale: 10,
        opacity: 0,
        // scale:0,
        y: -100

    })
    .to(".imgs", {
        // scale: 10,
        // opacity:0,
        // scale:0,
        y: 500,
        duration:3


    })


let tlthree = gsap.timeline({
    defaults: {
        duration: 1,
    },
    scrollTrigger: {
        trigger: ".sectionthree",
        // markers: true,
        start: "top bottom",
        end: "top 00%",
        scrub: 1,
        // pin:true

    }
})
tlthree.from(".headthree", {
    y: -100,
    duration: 0.5


})
    .from(".one", {
        x: -1500,
        duration: 2
    }, "<3")
    .from(".two", {
        x: -1500,
        duration: 2
    }, "<")
    .from(".three", {
        x: 1500,
        duration: 2
    }, "<")
    .from(".four", {
        duration: 2,
        x: 1500,
    }, "<")


let tlfour = gsap.timeline({
    defaults: {
        duration: 1,
    },
    scrollTrigger: {
        trigger: ".sectionfour",
        // markers: true,
        start: "top bottom",
        end: "top 00%",
        scrub: 1,
        // pin:true

    }
})
tlfour.from(".moontwo", {
    scale:0,
})
.from(".moonflar", {
    scale:0,
},"<")