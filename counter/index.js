let count = document.querySelector("#count")
let decrese = document.querySelector("#decrese")
let reset = document.querySelector("#reset")
let increse = document.querySelector("#increse")
let body = document.querySelector("body")

let num = 0;


reset.addEventListener("click",function() {
    count.innerHTML = 0;
    num = 0;
    color();
    
})
decrese.addEventListener("click",function() {
    num -= 1;
    count.innerHTML = num;
    color();
    
})
increse.addEventListener("click",function() {
    num += 1
    count.innerHTML = num;
    color();
    
})

function color(){
    if (num > 0) {
        // document.querySelector("count").style.color = "blue6"
        // console.log("he")
        count.style.color = "rgb(65, 65, 223)"
        body.style.background = "rgb(65, 65, 223)"
        
    }
    else if (num < 0 ){
        count.style.color = "rgb(228, 57, 57)"
        body.style.background = "rgb(228, 57, 57)"
        
    }
    else{
        body.style.background = "rgba(0, 0, 0, 0.589)"
        count.style.color = "white"

    }
}
