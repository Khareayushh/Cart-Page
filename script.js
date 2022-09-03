const increment = document.querySelectorAll(".positive");
const decrement = document.querySelectorAll(".negetive");
const count = document.querySelector(".count");

function incre(i, a){
    a++;
    a = (a<10) ? "0" + a : a;
    console.log(count[i]);
};

for(var i=0;i<increment.length;i++){
    let a=1;
    const button = increment[i];
    button.addEventListener('click', incre(i, a));
}

console.log(increment);
console.log(decrement);

// for(var i=0;i<increment.length;i++){
//     var button = increment[i];
//     button.addEventListener('click', (event)=>{
//         var buttonClicked = event.target;
//         // console.log(buttonClicked);
//         var input = buttonClicked.parentElement.children[2];
//         console.log(input);

//     })
// }

// increment.forEach(()=>{
//     addEventListener("click", ()=>{
//         document.getElementById("num").innerText++;
//         num++;
//     })
// })

// var num = document.querySelectorAll(".count").innerText;

// increment.addEventListener("click", ()=>{
//     document.querySelectorAll(".count").innerText++;
//     num++
//     console.log(num);
// })

// decerment.addEventListener("click", ()=>{
//     document.querySelectorAll(".count").innerText--;
//     num--;
//     console.log(num);
// })




// var items_cost = document.getElementById("items_cost");

// const numofitems = [];
// const prices = [];

// const products = document.querySelectorAll(".pro").innerText;
// var sum = 0;
// products.forEach(() => {
//     console.log(document.getElementById("rupp").innerText);
//     console.log(document.getElementById("num").innerText);

//     sum = sum + (document.getElementById("num").innerText*document.getElementById("rupp").innerText);
// })

// console.log(sum);