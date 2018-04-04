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
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      for (let i = 0; i < cart.length; i++) {
        return `In your cart, you have ${item[i]} at ${itemPrice[i]}.`
    }
  }
}
