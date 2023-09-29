let next = document.querySelector("#next")
let previous = document.querySelector("#previous")
let one = document.querySelector("#one")
let two = document.querySelector("#two")
let three = document.querySelector("#three")
let forth = document.querySelector("#forth")
let i = 0;


next.addEventListener("click",function() {
    if(i == 0){
        one.style.display = "flex" 
        i++;    
    }
    else if(i == 1){
        one.style.display = "none" 
        two.style.display = "flex" 
        i++;    
    }
    else if(i == 2){
        two.style.display = "none" 
        three.style.display = "flex" 
        i++;    
    }
    else{
        three.style.display = "none" 
        forth.style.display = "flex" 
        i++;    
    }
})
previous.addEventListener("click",function() {
    if(i == 0){
        one.style.display = "flex" 
        two.style.display = "none" 
        i--;    
    }
    else if(i == 1){
        two.style.display = "flex" 
        three.style.display = "none" 
        i--;    
    }
    else if(i == 2){
        forth.style.display = "none" 
        three.style.display = "flex" 
        i--;  }  
    else if(i == 3){
        forth.style.display = "flex" 
        three.style.display = "none" 
        i--;    
    }  
    
})