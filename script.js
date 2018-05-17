var SamsungGalaxyS6 = new Phone("Samsung", 1200, "black", "4px");
var iPhone6S = new Phone("Apple", 2250, "silver", "5px");
var OnePlusOne = new Phone("Plus", 1500, "blue", "6px");

function Phone(brand, price, color, size) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.size = size;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", size is " + this.size + " and the price is " + this.price + ".");
};

iPhone6S.printInfo();
