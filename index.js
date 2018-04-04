var cart = [];

function getCart(){
    return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100) + 1;
  cart.push({ [item] : itemPrice });
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {

  if (cart.length < 1) {
    return console.log("Your shopping cart is empty.")
  } 

  var itemsAndPrices = [];
  
  for (let i = 0; i < cart.length; i++) {
      var itemAndPrice = cart[i];
      var item = Object.keys(itemAndPrice)[0];
      let price = itemAndPrice[item];

      itemsAndPrices.push(`${item} at \$${price}`);
    }

    switch(itemsAndPrices.length) {
      case 1: 
        break;
      case 2: 
        itemsAndPrices = itemsAndPrices.join(" and ");
        break;
      default:
        itemsAndPrices[1-1] = "and ".concat(itemsAndPrices[1-1]);
        itemsAndPrices = itemsAndPrices.join(", ");
    }
    console.log(`In your cart, you have ${itemsAndPrices}.`);
}