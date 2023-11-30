// Implementing using object.create()
let vehicle = {
  type: "SUV",
  color: "white",
  seating_capacity: 8,
  is_manual: true,
  fuelType: "petrol",
  wheels: 4,
};

let newcar = Object.create(vehicle);
newcar.Model = "XUV700";
newcar.Engine = "2.5L 4-cylinder engine";

console.log(newcar);

// Implementing using constructor functions()

function Vehicle(type, color, seating_capacity, is_manual, fuelType, wheels) {
  this.type = type;
  this.color = color;
  this.seating_capacity = seating_capacity;
  this.is_manual = is_manual;
  this.fuelType = fuelType;
  this.wheels = wheels;
}

// setting the prototype of model and engine
Vehicle.prototype.Model = function (model) {
  this.model = model;
};
Vehicle.prototype.Engine = function (engine) {
  this.engine = engine;
};

let newcar1 = new Vehicle("Sports car", "black", 2, false, "Electric", 4);
newcar1.Model("BMW 8-Series");
newcar1.Engine("turbochargers");
console.log(newcar1);
