var Pizza = function(size, toppings, quantity) {
  this.size = size;
  this.toppings = [];
  this.quantity = quantity;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.cost = function() {
  var pizzaCost = 0.00;
  var pizzaSize = 0.00;
  var toppings = this.toppings;
  var toppingsQty = toppings.length;

  // return order size cost
  if (this.size === 12) {
    pizzaSize = 8.99;
  } else if (this.size === 14) {
    pizzaSize = 12.99;
  } else if (this.size === 16) {
    pizzaSize = 14.99;
  } else if (this.size === 18) {
    pizzaSize = 16.99;
  }

  // calculate final cost
  return pizzaCost = this.quantity * (pizzaSize + (toppingsQty * 0.75));
};

var Order = function(pizzas) {
  this.pizzas = [];
};

Order.prototype.totalCost = function() {
  var total = 0;
  this.pizzas.forEach(function(pizza) {
    total += pizza.cost();
  });
  return total;
};






$(document).ready(function() {
  var clearFields = function() {
    $("input.sizes").val("");
    $("input.crusts").val("");
    $("input.toppings").val("");
  };


  $("form#new-order").submit(function(event) {
    event.preventDefault();


  });
});
