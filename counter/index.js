let count = document.querySelector("#count")
let decrese = document.querySelector("#decrese")
let reset = document.querySelector("#reset")
let increse = document.querySelector("#increse")
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
        count.style.color = "blue"
    }
    else if (num < 0 ){
        count.style.color = "red"

    }
    else{
        count.style.color = "white"

    }
}
