// Try to define a Car "class"
// With two properties: brand, speed
// With two methods: accelerate(inc), brake(dec)
// Add another method: printState ("Ferrari at 200 km/h")
// Then create one instance and play with it

var Car = function(brand) {
	this.brand = brand;
	this.speed = 0;

	this.accelerate = function(increment) {
		this.speed += increment;
	}
	
	this.brake = function(decrement) {
		if (decrement <= this.speed) {
			this.speed -= decrement;
		} else {
			this.speed = 0;
		}
	}
	this.printState = function() {
		return this.brand + " runs at: " + this.speed + " km/h.";
	}
}

var car = new Car("Ford");

console.log(car.printState());
car.accelerate(150);
console.log(car.printState());
car.brake(40);
console.log(car.printState());