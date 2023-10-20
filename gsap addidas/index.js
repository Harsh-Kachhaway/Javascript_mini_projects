let tl = gsap.timeline({
    delay:0.5,
    default:{
    }
});

tl.from(".one",{
    x:1920,
    duration:0.5
});
tl.from(".two",{
    x:1920,
    duration:0.5
},"<0.5");
tl.from(".three",{
    x:1920,
    duration:0.5
},"<0.5");
tl.from(".left",{
    y:-70,
    duration:0.5,
    opacity:0
});
tl.from(".oneric",{
    x:190,
    duration:0.8,
    opacity:0
});
tl.from(".tworic",{
    x:140,
    duration:1,
    opacity:0
},"<0");
tl.from(".conhead",{
    y:140,
    duration:1,
    opacity:0
},"<0");
tl.from(".imag",{
    y:140,
    duration:1,
    opacity:0
},"<0.7");
tl.from(".containerone i",{
    x:-140,
    duration:1,
    opacity:0
},"<0.3");
tl.from("button",{
    y:-140,
    duration:1,
    opacity:0
},"<0");
tl.from(".small",{
    y:140,
    duration:1,
    opacity:0
},"<1");
tl.from(".navhead",{
    y:140,
    duration:1,
    opacity:0
},"<1");

let imgone = document.querySelector(".imag")
let imgtwo = document.querySelector(".small")
let con = document.querySelector(".containerthree")

con.addEventListener("click",function(){
    imgtwo.innerHTML = 
    console.log("hellow")
})


