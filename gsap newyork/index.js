let tl = gsap.timeline({
    delay:0.1,
    default:{
        duration:0.5
    }
})

tl.from("nav",{
    y:-100
})
tl.from(".odd",{
    y:200,
    duration:1
})
tl.from(".even",{
    y:200,
    duration:2.5
},"<0")
tl.from(".even , .odd",{
    opacity:0,
    duration:1.1
},"<0")
tl.from(".head",{
   y:100,
   opacity:0,
   duration:1
},"<0")
tl.from(".down",{
   y:100
},"<0.5")
tl.from(".containertwo",{
   y:100,
   opacity:0
},"<0.8")