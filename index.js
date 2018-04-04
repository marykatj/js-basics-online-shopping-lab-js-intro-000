var cart = [];

function getCart(){
    return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemName = name
  var itemPrice = Math.floor(Math.Random() * 100) + 1;
  var newObject = Object.Assign({}, cart);
  newObject.push({[itemName] : itemPrice});
  return newObject;
}
