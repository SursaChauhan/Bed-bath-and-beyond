  // Get the cart items from local storage
  var cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  // Select the container where cart items will be displayed
  var cartContainer = document.querySelector(".cart-items");
  
  // Variables to keep track of total price and total quantity
  var totalPrice = 0;
  var totalQuantity = 0;
  
  // Loop through the cart items and create elements for each item
  function cartRefresh{
  cartItems.forEach(function (item) {
      var existingCartItemDiv = cartContainer.querySelector(`[data-item="${item.name}"]`);
  
      if (existingCartItemDiv) {
          // Product already exists in the cart, update quantity
          var itemQuantityElement = existingCartItemDiv.querySelector(".item-quantity");
          var existingQuantity = parseInt(itemQuantityElement.textContent.split(" ")[1]);
          var newQuantity = existingQuantity + item.quantity;
  
          itemQuantityElement.textContent = "Quantity: " + newQuantity;
  
  
          // Update total quantity
          totalQuantity += item.quantity;
          totalPrice += item.price * item.quantity;
          localStorage.setItem("totalPrice",JSON.stringify(totalPrice))
              localStorage.setItem("totalQuantity",JSON.stringify(totalQuantity))
      } else {
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
          itemQuantity.textContent = "Quantity: " + item.quantity;
          itemQuantity.classList.add("item-quantity");


          var increaseButton = document.createElement("button");
          increaseButton.textContent = "+";
          increaseButton.classList.add("increase-button");

          var decreaseButton = document.createElement("button");
          decreaseButton.textContent = "-";
          decreaseButton.classList.add("decrease-button");


          increaseButton.addEventListener("click", function() {
            // Increase the item quantity when the increase button is clicked
            item.quantity++;
            itemQuantity.textContent = "Quantity: " + item.quantity; // Update the displayed quantity
            localStorage.setItem("cartItems",JSON.stringify(cartItems))
            cartRefresh()
          });
          
          // Add an event listener for the decrease button
          decreaseButton.addEventListener("click", function() {
            // Decrease the item quantity when the decrease button is clicked
            if (item.quantity > 0) {
              item.quantity--;
              itemQuantity.textContent = "Quantity: " + item.quantity; // Update the displayed quantity
            }
          });
        }
          

             cartItemDiv.append(img, itemName, itemPrice, itemQuantity, increaseButton, decreaseButton);
  
         // cartItemDiv.append(img, itemName,  itemPrice, itemQuantity);
  
          // Add a "Remove" button
          var removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.classList.add("remove-button");
      removeButton.addEventListener("click", function () {
          removeCartItem(item);
      });
  
  
          cartItemDiv.appendChild(removeButton);
          cartContainer.appendChild(cartItemDiv);
  
          // Update total price and total quantity
          totalPrice += item.price * item.quantity;
          totalQuantity += item.quantity;
      }
  
      // ... (existing code)
  });
  
  // Store the calculated total price in local storage
  localStorage.setItem("totalPrice", totalPrice);
  
  // Update total price and total quantity in the HTML
  var totalNumElement = document.getElementById("total-num");
  totalNumElement.textContent = totalQuantity;
  
  var totalPriceElement = document.getElementById("total-price");
  totalPriceElement.textContent = totalPrice.toFixed(2); // Format to 2 decimal places
  
  // Check if coupon code is applied
  var couponCode = "MASAI30"; // Coupon code for 20% discount
  var isCouponApplied = false; // Flag to track coupon application
  
  // Function to apply coupon code
  function applyCoupon() {
      if (isCouponApplied) return; // Coupon already applied
  
      // Apply coupon code logic
      // Apply coupon code logic
  if (couponCode === "MASAI30") {
      totalPrice *= 0.8; // Apply 20% discount
      isCouponApplied = true;
      localStorage.setItem("isCouponApplied", true);
  
  }
  
      // Update total price in the HTML
      totalPriceElement.textContent = totalPrice.toFixed(2); // Format to 2 decimal places
  }
  
  // Button to apply coupon code
  var couponButton = document.getElementById("promoC");
  couponButton.addEventListener("click", applyCoupon);
  function removeCartItem(item) {
      // Find the cart item element
      var cartItemDiv = cartContainer.querySelector(`[data-item="${item.name}"]`);
      if (cartItemDiv) {
          // Remove the item's HTML element from the cart display
          cartContainer.removeChild(cartItemDiv);
  
          // Remove the item from cartItems array
          var itemIndex = cartItems.indexOf(item);
          if (itemIndex !== -1) {
              cartItems.splice(itemIndex, 1);
              localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
              // Update total price and total quantity
              totalPrice -= item.price * item.quantity;
              totalQuantity -= item.quantity;
              localStorage.setItem("totalPrice",JSON.stringify(totalPrice))
              localStorage.setItem("totalQuantity",JSON.stringify(totalQuantity))
  
              // Update total price and total quantity in the HTML
              totalNumElement.textContent = totalQuantity;
              totalPriceElement.textContent = totalPrice.toFixed(2); // Format to 2 decimal places
          }
      }
  }
  cartRefresh()