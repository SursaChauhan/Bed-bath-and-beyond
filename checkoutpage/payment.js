var cartdata =[]

    var formobj={
totalitems:120,
totalprice:12480,
discountprice:1240,
    }

cartdata.push(formobj)
localStorage.setItem("cartdata",JSON.stringify(cartdata))

 cartdata = JSON.parse(localStorage.getItem("cartdata"));


 var div1= document.createElement("div");
 var div2= document.createElement("div");
 var div3= document.createElement("div");
 var div4= document.createElement("div");
 var div5= document.createElement("div");
 var div6= document.createElement("div");
 var div7 =document.createElement("div");


cartdata.forEach(function(ele){
 var one= ele.totalitems
 console.log(one)

 
const span = document.createElement('p');
span.textContent = '$'+ ele.totalprice;
const totalitemsElement = document.createElement('p');
totalitemsElement.textContent = ` ${one} (Items):`;
div1.append(totalitemsElement,(span))



const span1 = document.createElement('p');
span1.textContent = '$'+ ele.discountprice;

const discountpriceElement = document.createElement('p');
discountpriceElement.textContent = `Discount Price: `;
div2.append(discountpriceElement,(span1))

const newprice = ele.totalprice - ele.discountprice

const span2 = document.createElement('p');
span2.textContent ='$'+ newprice;

const totalpriceElement = document.createElement('p');
totalpriceElement.textContent = `Subtotal: `;
div3.append(totalpriceElement,(span2))


const span3 = document.createElement('p');
span3.textContent =` Free` ;

const totalship = document.createElement('p');
totalship.textContent = `Shipping:`;
div4.append(totalship,(span3))

const totaltaxprice= `${2114.30}`
const span4 = document.createElement('p');
span4.textContent ='$'+ parseFloat(totaltaxprice );

const totaltax = document.createElement('p');
totaltax.textContent = `Estimated Tax: `;
div5.append(totaltax,(span4))


const buyprice =parseFloat(newprice) +parseFloat (totaltaxprice)
const span5 = document.createElement('p');
span5.textContent ='$'+ parseFloat(buyprice);

const buypriceElement = document.createElement('p');
buypriceElement.textContent = `Your Total: `;
div6.append(buypriceElement,(span5))


const iconElement = document.createElement("img");
iconElement.setAttribute("src","https://icon-library.com/images/lock-icon/lock-icon-8.jpg")
iconElement.classList.add("lock");
iconElement.style.width="2rem"
div7.style.backgroundColor="#46a1e3"

div7.addEventListener("click",function(event){
    window.location.href="./otp.html"
});
const lockElement = document.createElement('p');
lockElement.textContent = `Submit Order`;

div7.append(iconElement,lockElement)
div7.style.display="flex"
div7.style.justifyContent="center"
div7.style.gap="16px"
div7.style.color="white"
div7.style.borderRadius="5px"

var total =document.getElementById("total")
total.textContent=ele.totalprice

})




// var subtotal =document.getElementById("subtotal");


var submitorder=document.getElementById("submitorder")
submitorder.style.cursor="pointer"
submitorder.addEventListener("click",function(event){
    window.location.href="./otp.html"
})



var div8 =document.createElement("p")
div8.textContent=`This Order Ships Free!`
div8.style.display="flex"
div8.style.justifyContent="center"

const hrElement = document.createElement('hr');
hrElement.setAttribute("class","hrclass");

subtotal.appendChild(div1);
subtotal.appendChild(div2);
subtotal.appendChild(div3);
subtotal.appendChild(hrElement);
subtotal.appendChild(div4);
subtotal.appendChild(div5);
subtotal.appendChild(div6);
subtotal.appendChild(div7);
subtotal.appendChild(div8);

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