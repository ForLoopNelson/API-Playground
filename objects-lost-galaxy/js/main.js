//Create a pizza object that has four properties and three methods
let pizza = {};

pizza.size = "large";
pizza.crust = "thin";
pizza.toppings = ["cheese", "pepperoni", "jalapenos"];
pizza.sauce = "marinara";

pizza.estimatedDeliveryTime = function () {
  console.log("Calculating...");
};

pizza.burnMouth = function () {
  console.log("OOOOUUUCHH");
};

pizza.timeToEat = function () {
  console.log("Time to Munch it all");
};

//constructor version

function Makepizza(size, crust, toppings, sauce) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
  this.sauce = sauce;

  this.estimatedDeliveryTime = function () {
    console.log("Calculating...");
  };

  this.burnMouth = function () {
    console.log("OOOOUUUCHH");
  };

  this.timeToEat = function () {
    console.log("Time to Munch it all");
  };
}

let thinCrustChz = new Makepizza("large", "thin", "cheese", "normal");

let deepDish = new Makepizza(
  "large",
  "deep dish",
  ["cheese", "bacon", "onions"],
  "extra sauce"
);
