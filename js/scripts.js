var Pizza = function(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};


Pizza.prototype.cost = function() {
  var pizzaCost = 0;

  // return order size cost
  if (this.size === 12) {
    pizzaCost = this.quantity * (9 + this.toppings.length);
  } else if (this.size === 14) {
    pizzaCost = this.quantity * (13 + this.toppings.length);
  } else if (this.size === 16) {
    pizzaCost = this.quantity * (15 + this.toppings.length);
  } else if (this.size === 18) {
    pizzaCost = this.quantity * (17 + this.toppings.length);
  }

  // calculate final cost
  return pizzaCost;
};

var Order = function() {
  this.pizzas = [];
};

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
};

Order.prototype.totalCost = function() {
  var total = 0;
  this.pizzas.forEach(function(pizza) {
    total += pizza.cost();
  });
  return total;
};





// jQuery
$(document).ready(function() {
  // var clearFields = function() {
  //   $("input.sizes").val("");
  //   $("input.crusts").val("");
  //   $("input.toppings").val("");
  // };


  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    // create pizza
    var pizzaSize = parseInt($(this).find("input[name=size]:checked").val());
    var pizzaCrust = $(this).find("input[name=crust]:checked").val();
    var pizzaQty = parseInt($(this).find('option:selected').val());
    var pizzaToppings = [];
    $(this).find("input[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    var newPizza = new Pizza(parseInt(pizzaSize), parseInt(pizzaToppings.length), parseInt(pizzaQty));
    var cost = newPizza.cost();


    // create order
    var newOrder = new Order();
    newOrder.addPizza(newPizza);
    var total = newOrder.totalCost();

    // show order
    $("span#show-size").text(pizzaSize + '"');
    $("span#show-crust").text(pizzaCrust);
    $("span#show-quantity").text(pizzaQty);
    $.each(pizzaToppings, function(topping) {
      $("ul#show-toppings").append("<li>" + pizzaToppings[topping] + "</li>");
    });


    $("span#show-cost").text(total);
  });
});
