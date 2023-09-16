var totalprice=[12480]

var totalitems=[120]
var discountprice=[1240]
// localStorage.setItem("totalPrice", totalPrice);

// Update total price and total quantity in the HTML
// var totalNumElement = document.getElementById("total-num");
// totalNumElement.textContent = totalQuantity;

// var totalPriceElement = document.getElementById("total-price");
// totalPriceElement.textContent = totalPrice.toFixed(2); // Format to 2 decimal places


var subtotal =document.getElementById("subtotal");

const newprice =totalprice -discountprice
const totalpriceElement = document.createElement('p');
totalpriceElement.textContent = `Subtotal: $${newprice}`;


var div1= document.createElement("div");
const span = document.createElement('h3');
span.textContent = totalprice;


const totalitemsElement = document.createElement('p');
totalitemsElement.textContent = ` ${totalitems} (Items):`;
div1.append(totalitemsElement,(span))

const totalship = document.createElement('p');
totalship.textContent = `Shipping: Free`;

const totaltaxprice= [2114.30]
const totaltax = document.createElement('p');
totaltax.textContent = `Estimated Tax: ${totaltaxprice}`;

const discountpriceElement = document.createElement('p');
discountpriceElement.textContent = `Discount Price: $${discountprice}`;


const buyprice =parseFloat(newprice) +parseFloat (totaltaxprice)
const buypriceElement = document.createElement('p');
buypriceElement.textContent = `Your Total: $${buyprice}`;

const hrElement = document.createElement('hr');
hrElement.setAttribute("class","hrclass");

subtotal.appendChild(div1);
subtotal.appendChild(discountpriceElement);
subtotal.appendChild(totalpriceElement);
subtotal.appendChild(hrElement);
subtotal.appendChild(totalship);
subtotal.appendChild(totaltax);
subtotal.appendChild(buypriceElement);


var couponCode = "MASAI30"; // Coupon code for 20% discount
var isCouponApplied = false; // Flag to track coupon application


var couponButton = document.getElementById("promoC");
couponButton.addEventListener("click", applyCoupon);

function applyCoupon() {
    if (isCouponApplied) return; // Coupon already applied

    // Apply coupon code logic
    // Apply coupon code logic
if (couponCode === "MASAI30") {
    totalPrice *= 0.8; // Apply 20% discount
    isCouponApplied = true;
    localStorage.setItem("isCouponApplied", true);

}
window.location.reload();
    // Update total price in the HTML
    // totalPriceElement.textContent = totalPrice.toFixed(2); // Format to 2 decimal places
}