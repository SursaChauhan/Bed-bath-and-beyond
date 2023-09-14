let productData = [
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/c6917cdd1ffcf305dfd96083babe027e42ec4885/Soft-Essentials-All-season-Down-Alternative-Reversible-Lightweight-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Soft Essentials All-season Down Alternative Reversible Lightweight Comforter Set",
    price: 3783,
  },

  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/4ce0b45d11f5b6867b3d34587446c51860da1c85/Intelligent-Design-Isabel-Velvet-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Intelligent Design Isabel Velvet Comforter Set",
    price: 4961,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/e563cc9033bfd8adc5d8959b30a587311f5bb4d7/BYB-Charcoal-Coma-Inducer-Comforter.jpg?imwidth=960&impolicy=medium",
    name: "BYB Charcoal Coma Inducer Comforter",
    price: 2356,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/34428f019f641cbe84fb0a82e71ece98b56bb983/Designart-%27Tropical-VIntage-Flowers-I%27-Tropical-Duvet-Cover-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Designart 'Tropical VIntage Flowers I' Tropical Duvet Cover Comforter Set",
    price: 6851,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/58e470126a8a1d80379d7509aaf5f874f048e1e3/Superior-Florence-Blue-8-piece-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Superior Florence Blue 8-piece Comforter Set",
    price: 3543,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/5b306d5c9970a0243024a5f66c60041eac9ede65/Lanwood-Home-Mia-10-Piece-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Lanwood Home Mia 10-Piece Comforter Set",
    price: 6562,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/4e509d311619249058dba4931e16a74d9417ed1b/Modern-Threads-Braelyn-4-Piece-Garment-Washed-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "Modern Threads Braelyn 4-Piece Garment-Washed Comforter Set",
    price: 2692,
  },

  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/is/images/direct/bf20bfdca95ec54a1f77f4b06bad47ddefe02ffb/10-piece-Solid-Plaid-Comforter-Set.jpg?imwidth=960&impolicy=medium",
    name: "10-piece Solid Plaid Comforter Set",
    price: 5652,
  },
  {
    image_url:
      "https://ak1.ostkcdn.com/images/products/30969229/Oh-Sweetie-Bare-Coma-Inducer-Oversized-Comforter-Alloy-1235626d-90ca-478c-ab2a-469c7cd50995_1000.jpg?imwidth=960&impolicy=medium",
    name: "Oh Sweetie Bare Alloy Coma Inducer Oversized Comforter",
    price: 6522,
  },
];

localStorage.setItem("productData", JSON.stringify(productData));

let parentDiv = document.querySelector("#parent");

function showItems() {
 
  productData.forEach(function (ele, index) {
 
    let div = document.createElement("div");
    let img = document.createElement("img");
    let name = document.createElement("h5"); 
    let price = document.createElement("p"); 
    let button = document.createElement("button");
    let btn = document.createElement("button"); 

    
    img.src = ele.image_url;
    name.innerText = ele.name;
    price.innerText = ele.price;
    button.innerText = "Add to cart";

    button.addEventListener("click", function () {
      cartFunction(index);
    });
  
    div.append(img, name, price, button);
    parentDiv.append(div);
  });
}

showItems();

// Function to add products to the shopping cart
function cartFunction(index) {
  // Retrieve the cart data from local storage or initialize an empty array
  let cartData = JSON.parse(localStorage.getItem("cartData")) || [];

  // Filter the product that was clicked
  var product = productData.filter(function (ele, ind) {
    return ind === index;
  });

  // Find the index of the product in the cart
  var ind = cartData.findIndex(function (ele) {
    return ele.name === product[0].name && ele.price === product[0].price;
  });

  // Check if the product is already in the cart, if yes, increase the quantity; otherwise, set quantity to 1
  if (ind !== -1) {
    cartData[ind].quantity++;
  } else {
    product[0].quantity = 1;
    cartData.push(product[0]);
  }

  // Store the updated cart data in local storage
  localStorage.setItem("cartData", JSON.stringify(cartData))
}
