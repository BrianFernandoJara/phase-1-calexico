// Write your code here...
const menu = document.getElementById("menu-items");
const dishImg = document.getElementById("dish-image");
const dishName = document.getElementById("dish-name");
const dishDesc = document.getElementById("dish-description");
const dishPrice = document.getElementById("dish-price");
const cartForm = document.getElementById("cart-form")
const number = document.getElementById("cart-amount")
const cartSpan = document.getElementById("number-in-cart")
number.type = "number"

fetch("http://localhost:3000/menu")
.then(resp => resp.json())
.then(data => {
    data.forEach(menuItem => {
        const newSpan = document.createElement("span");
        
        newSpan.innerHTML = menuItem.name;

        menu.appendChild(newSpan);

        newSpan.addEventListener("click", () => {
            showcaseDish(menuItem);
        })
    });
    showcaseDish(data[0])
})
function showcaseDish(menuItem){
    dishImg.src = menuItem.image;
    dishName.innerHTML = menuItem.name;
    dishDesc.innerHTML = menuItem.description;
    dishPrice.innerHTML = `$${menuItem.price}`;
}

cartForm.addEventListener("submit",(event) =>{
    event.preventDefault();
    let cartNumber = parseInt(cartSpan.innerHTML)
    let inputNumber = parseInt(number.value)
    let newNumber = cartNumber + inputNumber;
    cartSpan.innerHTML = newNumber;
    number.value = "";
})

