let text = document.querySelector(".btns");
let display = document.querySelector(".display");
let dis = "";
let result;
let target;

text.addEventListener("click", function (e) {
  target = e.target.textContent;
  if (target == "=") {
    console.log(dis);
    result = eval(dis);
    console.log(result);
    display.innerHTML = result;
    dis = "";
    if (result == "NaN"){
        display.innerHTML = "error"
        dis =""
      }
  } else if (target == "C") {
    display.innerHTML = "enter";
    dis = "";
  } else if (target == "D") {
    dis = dis.slice(0, dis.length - 1);
    display.innerHTML = dis;
    console.log(dis);
    console.log(dis.length);
    if (dis.length == 0) {
      dis = "";
      display.innerHTML = "enter";
    }
  } 
  else {
      dis += target;
      display.innerHTML = dis;
      console.log(dis)
      // console.log(target)
    // console.log(dis.length )
    // console.log(dis.length - 1)
  }
});

// let display = document.querySelector(".display")
// // numbers
// let one = document.querySelector("#one")
// let two = document.querySelector("#two")
// let three = document.querySelector("#three")
// let four = document.querySelector("#four")
// let five = document.querySelector("#five")
// let six = document.querySelector("#six")
// let seven = document.querySelector("#seven")
// let eight = document.querySelector("#eight")
// let nine = document.querySelector("#nine")
// let zeros = document.querySelector("#zeros")
// let zero = document.querySelector("#zero")
// let dot = document.querySelector("#dot")
// //operators
// let div = document.querySelector("#div")
// let mul = document.querySelector("#mul")
// let min = document.querySelector("#min")
// let add = document.querySelector("#add")
// let percent = document.querySelector("#per")
// //featurs
// let clear = document.querySelector("#c")
// let delet = document.querySelector("#delet")
// let equal = document.querySelector("#equal")
// let result= 0;
// let dis = 0;

// //event listner
// one.addEventListener("click",function () {
//     dis += "1";
//        display.innerHTML = dis;
//     //    console.log(dis)
// })
// two.addEventListener("click",function () {
//     dis += "2";
//        display.innerHTML = dis
// })
// three.addEventListener("click",function () {
//     dis += "3";
//        display.innerHTML = dis
// })
// four.addEventListener("click",function () {
//     dis += "4";
//        display.innerHTML = dis
// })
// five.addEventListener("click",function () {
//     dis += "5";
//        display.innerHTML = dis
// })
// six.addEventListener("click",function () {
//     dis += "6";
//        display.innerHTML = dis
// })
// seven.addEventListener("click",function () {
//     dis += "7";
//        display.innerHTML = dis
// })
// eight.addEventListener("click",function () {
//     dis += "8";
//        display.innerHTML = dis
// })
// nine.addEventListener("click",function () {
//     dis += "9";
//        display.innerHTML = dis
// })
// zeros.addEventListener("click",function () {
//     dis += "00";
//        display.innerHTML = dis
// })
// zero.addEventListener("click",function () {
//     dis += "0";
//        display.innerHTML = dis
// })
// dot.addEventListener("click",function () {
//     dis += ".";
//        display.innerHTML = dis
// })
// //event listner for
// mul.addEventListener("click",function () {
//     dis += "*";

//     display.innerHTML = dis
// })
// add.addEventListener("click",function () {
//     dis += "+";
//        display.innerHTML = dis
// })
// min.addEventListener("click",function () {
//     dis += "-";
//        display.innerHTML = dis
// })
// div.addEventListener("click",function () {
//     dis += "/";
//        display.innerHTML = dis
// })
// //event listener for featurs
// c.addEventListener("click",function () {
//     dis = "0";
//        display.innerHTML = dis
// })
// delet.addEventListener("click",function () {
//     dis -= "/";
//        display.innerHTML = dis
// })
// equal.addEventListener("click",function () {
//     result = eval(dis)
//     display.innerHTML = result
//     dis =""
// })
