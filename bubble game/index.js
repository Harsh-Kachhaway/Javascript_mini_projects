let repbuble = document.getElementById("bottomplane");
let buble = document.getElementById("buble");
let value;
let hit = document.getElementById("hit");
let timer = document.getElementById("timer");
let time = 2;
let score = 0;
let scoreincrese = document.getElementById("score")
let hitvalue = 0;
let hvalue =0;


// functions
function repet(){
    for (let i = 0; i < 102; i++) {     
    repbuble.innerHTML += ` <div id="buble">${randommaths()}</div>`
}   
}
function randommaths(){
    value = Math.floor(Math.random()* 10);
    return value;
}
function hitmaker(){
    hvalue = randommaths();
    hit.innerText = hvalue;

}

function timerf(){
    let t = setInterval(() => {
        if (time > 0) {
            time--;
            console.log("hello")
            timer.innerText = time;
            console.log(hitvalue);
            
        }
        else{
            clearInterval(t);
        console.log("hey")
        repbuble.innerHTML = `game oveeer <br> your score is ${score}`
        
    }
    
}, 1000);
}
function scoretriger(){
    score += 10;
    scoreincrese.innerHTML = score;
    
}
function scoreneg(){
    score -= 10;
    scoreincrese.innerHTML = score;
    
    
}
document.getElementById("bottomplane").addEventListener("click",function(details){
    hitvalue = Number(details.target.textContent);
    makescore();
    hitmaker();
    repbuble.innerHTML = "";
    repet();
    
})

function makescore(){
    if (hitvalue === hvalue ) {
        scoretriger();

        
    }
    else{
        scoreneg();
    }

}



hitmaker();
timerf();
repet();
