describe("Pizza", function() {
  it('creates a custom pizza', function() {
    var newPizza = new Pizza(12, [], 1);
    expect(newPizza.size).to.equal(12);
    expect(newPizza.toppings).to.eql([]);
    expect(newPizza.quantity).to.equal(1);
  });

  it('lets user add toppings to pizza', function() {
    var newPizza = new Pizza(12, [], 1);
    newPizza.addTopping("ham");
    expect(newPizza.toppings).to.eql(["ham"]);
  });

  it('calculates the cost of the pizza', function() {
    var newPizza = new Pizza(12, [], 1);
    newPizza.addTopping("ham");
    newPizza.addTopping("pineapple");
    expect(newPizza.cost()).to.equal(10.49);
  });
});



describe("Order", function() {
  it('creates a new order', function() {
    var newPizza = new Pizza(12, [], 1);
    newPizza.addTopping("ham");
    newPizza.addTopping("pineapple");

    var newPizza2 = new Pizza(14, [], 2);
    newPizza2.addTopping("olives");
    newPizza2.addTopping("pepperoni");

    var newOrder = new Order("Andrew", []);
    newOrder.pizzas.push(newPizza);
    newOrder.pizzas.push(newPizza2);

    expect(newOrder.pizzas).to.eql([newPizza, newPizza2]);
  });

  it('calculates the total order cost', function() {
    var newPizza = new Pizza(12, [], 1);
    newPizza.addTopping("ham");
    newPizza.addTopping("pineapple");

    var newPizza2 = new Pizza(14, [], 2);
    newPizza2.addTopping("olives");
    newPizza2.addTopping("pepperoni");

    var newOrder = new Order("Andrew", []);
    newOrder.pizzas.push(newPizza);
    newOrder.pizzas.push(newPizza2);

    expect(newOrder.totalCost()).to.eql(39.47);
  });
});
