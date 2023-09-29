let time = gsap.timeline()
document.querySelector("#clear").addEventListener("click",{

})


 time.from(".containerone",{
     delay:3,
    x:-308
 })

 time.from(".display , #clear",{
    y:-110,
    // duration:0.1
})
time.from("#slider",{
    x:82.5
})
time.from("#equal , .spe",{
    y:300
})


let calce = document.querySelector(".container")
let equal = document.querySelector("#equal")
let dis =""
let display = document.querySelector(".display")
let result = 0
calce.addEventListener("click",function(e){
    if(e.target.textContent == "="){
        result = eval(dis)
        display.innerHTML = result
        console.log("result")
        dis = ""
        console.loq("dis")
        
    }
    else if (e.target.textContent == "C"){
        dis = ""
        display.innerHTML = "enter"
        let tl = gsap.timeline()
        tl.to(".display , #clear",{
            y:-110,
            duration:0.1
        })
        
        tl.to(".display , #clear",{
            y:0,
            duration:0.5,
            onComplet: clear(),
            background:"red"
        })
        
    }
    else if (e.target.textContent == "D"){
        dis = dis.slice(0,dis.length - 1)
        display.innerHTML = dis

        
    }
    else  {
        console.log(e.target.textContent)
        // e.target.textContent = dis
        dis += e.target.textContent
        console.log(dis)
        display.innerHTML = dis
        
    }
})
function clear( ) {
    dis = ""
    display.innerHTML = "what"
}