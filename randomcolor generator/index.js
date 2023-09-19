//unlock codes by uncommenting codes nothing is gerbage

let previous;
let code;


function num() {
    let number = Math.floor(Math.random() * 16777215).toString(16);
    return number;
}


function timer() {
    setInterval(() => {
        document.querySelector("#body").style.backgroundColor = `#${num()}`;
        
        
    }, 3000);
    
}


function colorgenerator() {
    // document.querySelector("body").style.backgroundColor = previous;
    code = `#${num()}`
    document.querySelector("#container").style.backgroundColor = code;
    document.querySelector("#color").style.backgroundColor = code
    // previous = code;
}

let button = document.querySelector("#btn")


button.addEventListener("click", function () {
    console.log("hellow");
    colorgenerator();
    document.querySelector("#color-value").innerHTML = code;

})

timer();