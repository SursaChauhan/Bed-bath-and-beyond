  // Get the cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Select the container where cart items will be displayed
  var cartContainer = document.querySelector(".cart-items");
  
  // Variables to keep track of total price and total quantity
  var totalPrice = 0;
  var totalQuantity = 0;
  
  // Loop through the cart items and create elements for each item
  function cartRefresh(){
    cartItems.length === 0 ? cartContainer.innerHTML = "<h2>Nothing in cart</h2>" :
    cartContainer.innerHTML = ""
  cartItems.forEach(function(item, ind){
      var cartItemDiv = document.createElement("div");
          cartItemDiv.classList.add("cart-item");
          cartItemDiv.setAttribute("data-item", item.name); // Set a data attribute for identification
  
          var img = document.createElement("img");
          img.setAttribute("src", item.imageURL1);
          img.setAttribute("alt", item.name);
  
          var itemName = document.createElement("h6");
          itemName.id="namee";
          itemName.textContent = item.name;
  
          var itemPrice = document.createElement("p");
          itemPrice.textContent = "Price: $" + item.price;
          itemPrice.id="pricee";
  
          var itemQuantity = document.createElement("p");
          itemQuantity.textContent = item.quantity;
          itemQuantity.classList.add("item-quantity");


          var increaseButton = document.createElement("button");
          increaseButton.textContent = "+";
          increaseButton.classList.add("increase-button");

          var decreaseButton = document.createElement("button");
          decreaseButton.textContent = "-";
          decreaseButton.classList.add("decrease-button");


          increaseButton.addEventListener("click", ()=>{updateQuantity(+1, item, itemQuantity)});
          
          // Add an event listener for the decrease button
          decreaseButton.addEventListener("click", ()=>{updateQuantity(-1, item, itemQuantity)})
          

             cartItemDiv.append(img, itemName, itemPrice, increaseButton, itemQuantity, decreaseButton);
  
         // cartItemDiv.append(img, itemName,  itemPrice, itemQuantity);
  
          // Add a "Remove" button
          var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function () {
          removeCartItem(item, ind);
      });
  
  
          cartItemDiv.appendChild(removeButton);
          cartContainer.appendChild(cartItemDiv);
  
          
  });
}
function updateQuantity(update, element, itemQuantity) {
    // Find the index of the item in the cartItems array
    const itemIndex = cartItems.findIndex((item) => item.name === element.name && item.price === element.price);
  
    if (itemIndex !== -1) {
      // Update the quantity
      cartItems[itemIndex].quantity += update;
  
      // Check if the quantity is zero and remove the item if needed
      if (cartItems[itemIndex].quantity === 0) {
        cartItems.splice(itemIndex, 1);
      }
  
      // Update the item quantity in the DOM
      itemQuantity.innerText = cartItems[itemIndex].quantity;
  
      // Update the total price and quantity
      updatePrice();
  
      // Store the updated cartItems in local storage
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }
  


  function updatePrice(){
    var totalQuantity = 0, totalPrice = 0
    cartItems.length === 0 ?
    (totalQuantity = 0 , totalPrice = 0) :
    cartItems.forEach(ele=>{
        totalQuantity +=ele.quantity
        totalPrice += (ele.quantity * ele.price)
    })
    document.getElementById("total-num").textContent = totalQuantity
    document.getElementById("total-price").textContent = totalPrice.toFixed(2)

    
    var isCouponApplied = (localStorage.getItem("isCouponApplied"))
    document.getElementById("promo").addEventListener("submit", 
    function (e) {
        e.preventDefault()
        var target = e.target
        var couponCode = target.querySelector("#inputC").value
        console.log(couponCode)
        if (isCouponApplied) return; // Coupon already applied
          
              
              // Apply coupon code logic
        if (couponCode === "MASAI30") {
            totalPrice *= 0.7; // Apply 20% discount
            totalPrice = totalPrice.toFixed(2)
            document.getElementById("total-price").textContent = totalPrice


            isCouponApplied = true;
            localStorage.setItem("isCouponApplied", true);
        }
    })
  }
  updatePrice()
  
  
  function removeCartItem(item, ind) {
      cartItems = cartItems.filter((e, index)=>{
        return ind != index
      })
      localStorage.setItem("cartItems", JSON.stringify(cartItems))
      cartRefresh()
  }
  cartRefresh()