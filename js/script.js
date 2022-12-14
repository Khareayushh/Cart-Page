import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDoc, collection, onSnapshot, doc, updateDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { db } from "./firebase.js";


const colRef = collection(db, 'items');

onSnapshot(colRef, (snapshot)=>{
    let cartItems = [];
    snapshot.docs.forEach((doc)=>{
      cartItems.push({ ...doc.data(), id: doc.id })
    })
    console.log(cartItems);
    generateCartItems(cartItems);
})
// fetch("store.json")
// .then((response) => response.json())
// .then((data) => {
//     // console.log(data);
    
//     localStorage.setItem('jsonfile', JSON.stringify(data));
//     generateCartItems(data.items);
//   });
// //storing into the local storeage to use it later
// const jsondata = JSON.parse(localStorage.getItem('jsonfile'));
// console.log(jsondata);
// // fetch("store.json")
// //     .then(response => response.json())
// //     .then(json => {
// //         generateCartItems(json.items);
        
// //     });


function decreaseCount(itemId){
    let cartItem = doc(db, 'items', itemId);
    getDoc(cartItem)
        .then(function(doc) {
        if(doc.exists){
            if(doc.data().quantity>1){
                updateDoc(cartItem, {
                    quantity: doc.data().quantity - 1
                })
            }
        }
    })
}
function increaseCount(itemId){
    let cartItem = doc(db, 'items', itemId);
    getDoc(cartItem)
        .then(function(doc) {
        if(doc.exists){
            if(doc.data().quantity>0){
                updateDoc(cartItem, {
                    quantity: doc.data().quantity + 1
                })
            }
        }
    })
}

function deleteItem(itemId){
    let cartItem = doc(db, 'items', itemId);
    deleteDoc(cartItem);
}

function generateCartItems(cartItems) {
    let itemsHTML = "";
    cartItems.forEach(item => {
        
        itemsHTML += `
        <div class="pro col" >
            <div class="img">
                <img src="${item.image}" alt="product-image">
            </div>



            <div class="columndiv">
                <div class="pro_details">
                    <p class="heading">${item.title}</p>
                    <p class="maker">by <span>${item.make}</span> | Electronics</p>
                </div>
                <p class="delivery_details">
                    Get it by <span class="col">Monday, June 27</span>
                </p>
            </div>
            <div class="counter col">
                <div class="plus item-increase" data-id="${item.id}">
                    <i class="fa-solid fa-plus" ></i>
                </div>
                <p class="count" id="num2">
                    ${item.quantity}
                </p>
                <div class="minus item-decrease" data-id="${item.id}">
                    <i class="fa-solid fa-minus"></i>
                </div>
            </div>
            <div class="price_details col">
                <div class="row">
                    <p class="price" id="rupp">??? ${item.price}
                    </p>
                    <i data-id="${item.id}" class="delete-btn fa-regular fa-trash-can"></i>
                </div>
                <p class="disc_det">Discount Applied: <span>52%</span></p>
            </div>
        </div>
        
        `
    });

    document.querySelector(".products").innerHTML = itemsHTML;
    createEventListners();
}


function createEventListners(){
    let decreaseButtons = document.querySelectorAll(".item-decrease");
    let increaseButtons = document.querySelectorAll(".item-increase");
    let deleteButtons = document.querySelectorAll(".delete-btn");

    decreaseButtons.forEach((button)=>{
        
        button.addEventListener("click", function(){
            decreaseCount(button.dataset.id);
        })
    })
    increaseButtons.forEach((button)=>{
        
        button.addEventListener("click", function(){
            increaseCount(button.dataset.id);
        })
    })
    deleteButtons.forEach((button)=>{
        
        button.addEventListener("click", function(){
            deleteItem(button.dataset.id);
            // console.log(button.dataset.id);
        })
    })
}

document.querySelectorAll(".price").forEach()

