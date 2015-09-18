describe("pizza", function() {
  it('creates a custom pizza', function() {
    var newPizza = new Pizza(12, [], 1);
    expect(newPizza.size).to.equal(12);
    expect(newPizza.toppings).to.eql([]);
    expect(newPizza.quantity).to.equal(1);
  });
});
