var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Implement the Vehicle interface in a Car class
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    // Public method to start the car
    Car.prototype.start = function () {
        console.log("".concat(this.brand, " is starting."));
    };
    // Public method to stop the car
    Car.prototype.stop = function () {
        console.log("".concat(this.brand, " is stopping."));
        this.speed = 0;
    };
    // Protected method to display speed
    Car.prototype.displaySpeed = function () {
        console.log("".concat(this.brand, " is running at ").concat(this.speed, " km/h."));
    };
    return Car;
}());
// Extend the Car class to create a SportsCar class
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(brand, turbo) {
        var _this = _super.call(this, brand) || this;
        _this.turbo = turbo;
        return _this;
    }
    // Override the start method to include turbo boost
    SportsCar.prototype.start = function () {
        _super.prototype.start.call(this);
        if (this.turbo) {
            console.log("Turbo boost activated!");
        }
    };
    // Public method to accelerate the sports car
    SportsCar.prototype.accelerate = function (speed) {
        this.speed += speed;
        this.displaySpeed(); // Accessing protected method from the base class
    };
    return SportsCar;
}(Car));
// Create instances of Car and SportsCar
var regularCar = new Car("Toyota");
regularCar.start();
regularCar.stop();
var sportsCar = new SportsCar("Ferrari", true);
sportsCar.start();
sportsCar.accelerate(50);
sportsCar.stop();
