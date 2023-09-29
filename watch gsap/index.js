let tl = gsap.timeline({
    // delay:0.5,
    stagger: 0.05,
    default: {
        duration: 0.01,
    }
});

//navebar
tl.from("nav", {
    y: -100,
    // stagger:1
})
// tl.from(".nevleft",{
//     duration:0.01,
//     y:-100
// })
// tl.from(".nevselect",{
//     stagger:0.025,
//     // duration:1,
//     y:-100
// })
// tl.from(".search",{
//     // duration:1,
//     stagger:0.025,
//     y:-100
// })

//heading
tl.from(".middle", {
    duration: 1.1,
    scale: 1.1,
    opacity: 0
})

//for images
tl.from("#red", {
    duration: 0.3,
    y: -1000
})
tl.from("#transperent", {
    duration: 0.3,
    y: -1000
}, 0.5)
tl.from("#blue", {
    duration: 0.3,
    y: -1000
}, "<0.5")
tl.from("img", {
    duration: 1.3,
    power: "elastic.out",
    y: -1000
})

//icone
tl.from(".ic", {
    // duration:10,
    stagger: 0.1,
    x: 100
})
let btn = document.querySelector(".btn")
let body = document.querySelector("body")
let num ; 
let nume = 4;
let i;

localStorage.setItem("number",nume) 
num = localStorage.getItem("number")

btn.addEventListener("click", function () {
    num = localStorage.getItem("number")
    them() 
})
function them(){
    i = (num % 2) ;
    if (i == 0) {
        body.style.background = "black";
        body.style.color = "white";
        num++;
    }
    else if ( i == 1) {
        body.style.background = "white";
        body.style.color = "black";
        num++;
        
    }
    
    localStorage.removeItem("number");
    localStorage.setItem("number",num) 
}
them()
