// Swlwcting items

// Buttons
let phoneMinusButton = document.querySelector(".phoneMinusButton");
let phonePlusButton = document.querySelector(".phonePlusButton");

let coverMinusButton = document.querySelector(".coverMinusButton");
let coverPlusButton = document.querySelector(".coverPlusButton");

let checkOut = document.querySelector(".checkOut");
//Buttons

// values
let phoneRate = document.querySelector(".phoneRate");
let coverRate = document.querySelector(".coverRate");

let subtotalValue = document.querySelector(".subtotalValue");
let taxValue = document.querySelector(".taxValue");
let totalValue = document.querySelector(".totalValue");

//inputs
let phoneInput = document.querySelector(".phoneInput");
let coverInput = document.querySelector(".coverInput"); 

// Logical part

phonePlusButton.addEventListener("click",() => {
    let result = Number(phoneInput.value) + 1;
    phoneInput.value = result;
    let result1 = Number(phoneRate.innerHTML);
    phoneRate.innerHTML = result1 + 1500;


})
phoneMinusButton.addEventListener("click",() => {
    let result = Number(phoneInput.value) - 1;
    phoneInput.value = result;
    let result1 = Number(phoneRate.innerHTML);
    phoneRate.innerHTML = result1 - 1500;
})

coverPlusButton.addEventListener("click",() => {
    let result = Number(coverInput.value) + 1;
    coverInput.value = result;

    let result1 = Number(coverRate.innerHTML);
    coverRate.innerHTML = result1 + 50;
})

coverMinusButton.addEventListener("click",() => {
    let result = Number(coverInput.value) - 1;
    coverInput.value = result;

    let result1 = Number(coverRate.innerHTML) -50;
    coverRate.innerHTML = result1;
})

checkOut.addEventListener("click",() => {
    let result = Number(phoneRate.innerHTML) + Number(coverRate.innerHTML);
    subtotalValue.innerHTML = result;
    let result1 = result * (5/100);
    taxValue.innerHTML = result1;
    let result3 = result + result1;
    totalValue.innerHTML = result3;
})




















