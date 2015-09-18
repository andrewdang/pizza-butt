var Pizza = function(size, toppings, quantity) {
  this.size = size;
  this.toppings = [];
  this.quantity = quantity;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping)
};
