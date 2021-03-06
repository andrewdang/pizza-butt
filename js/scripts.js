var Pizza = function(size, toppings, quantity) {
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};


Pizza.prototype.cost = function(size, numToppings, quantity) {
  var pizzaCost = 0;

  // return order size cost
  if (this.size === 12) {
    pizzaCost = quantity * (8.99 + numToppings);
  } else if (this.size === 14) {
    pizzaCost = quantity * (12.99 + numToppings);
  } else if (this.size === 16) {
    pizzaCost = quantity * (14.99 + numToppings);
  } else if (this.size === 18) {
    pizzaCost = quantity * (16.99 + numToppings);
  }

  // calculate final cost
  return pizzaCost;
};

// var Order = function() {
//   this.pizzas = [];
// };
//
// Order.prototype.addPizza = function(pizza) {
//   this.pizzas.push(pizza);
// };
//
// Order.prototype.totalCost = function() {
//   var total = 0;
//   this.pizzas.forEach(function(pizza) {
//     total += pizza.cost();
//   });
//   return total;
// };





// jQuery
$(document).ready(function() {
  var clearForm = function() {
    $('input:checkbox').removeAttr('checked');
    $('input:radio').removeAttr('checked');
  };

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    // create pizza
    var pizzaSize = parseInt($(this).find("input[name=size]:checked").val());
    var pizzaCrust = $(this).find("input[name=crust]:checked").val();

    var pizzaQty = parseInt($('select[name=quantity]').val());
    var pizzaToppings = [];
    $(this).find("input[name=toppings]:checked").each(function() {
      pizzaToppings.push($(this).val());
    });

    var newPizza = new Pizza(parseInt(pizzaSize), parseInt(pizzaToppings.length), parseInt(pizzaQty));
    var cost = newPizza.cost(pizzaSize, pizzaToppings.length, pizzaQty);
    cost = cost.toFixed(2);


    // show order & clear form
    $("span#show-quantity").text(pizzaQty);
    $("span#show-size").text(pizzaSize + '"');
    $("span#show-crust").text(pizzaCrust);
    $.each(pizzaToppings, function(topping) {
      $("ul#show-toppings").append("<li>" + pizzaToppings[topping] + "</li>");
    });
    $("span#show-cost").text("$" + cost);
    $(".container").addClass("butt-animation butt-wiggle");
    $(".collapseOne").addClass("in");
    $('.panel-collapse:not(".in")').collapse('show');
    $(".create").hide();

    // create new order button that refreshes page
    $(".new-order-clear").show();
    $(".new-order-clear").click(function() {
      location.reload(true);
    });

    clearForm();
  });
});
