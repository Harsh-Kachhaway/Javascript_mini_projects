gsap.to("#hed",{
    transform:"translateX(-230%)" , 
    duration:5,
    fontWeight:"700",
    fontFamily:"gilroy-black",
    end:"-100% top",
    scrollTrigger:{
        trigger:"#hed",
        scroller:"body",
        scrub:5,
        markers:true,
        pin:true

    }

})