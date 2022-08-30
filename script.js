const increment = document.getElementById("pos");
const decerment = document.getElementById("neg");
const price = document.getElementById("rupp");


increment.addEventListener("click", ()=>{
    document.getElementById("num").innerText++;
    price.innerHTML = `₹ {document.getElementById("num").innerText)*1399}`;
})

decerment.addEventListener("click", ()=>{
    document.getElementById("num").innerText--;
})




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