// Define a Vehicle interface
interface Vehicle {
    start(): void;
    stop(): void;
  }
  
  // Implement the Vehicle interface in a Car class
  class Car implements Vehicle {
    private brand: string;
    protected speed: number;
  
    constructor(brand: string) {
      this.brand = brand;
      this.speed = 0;
    }
  
    // Public method to start the car
    start(): void {
      console.log(`${this.brand} is starting.`);
    }
  
    // Public method to stop the car
    stop(): void {
      console.log(`${this.brand} is stopping.`);
      this.speed = 0;
    }
  
    // Protected method to display speed
    protected displaySpeed(): void {
      console.log(`${this.brand} is running at ${this.speed} km/h.`);
    }
  }
  
  // Extend the Car class to create a SportsCar class
  class SportsCar extends Car {
    private turbo: boolean;
  
    constructor(brand: string, turbo: boolean) {
      super(brand);
      this.turbo = turbo;
    }
  
    // Override the start method to include turbo boost
    start(): void {
      super.start();
      if (this.turbo) {
        console.log("Turbo boost activated!");
      }
    }
  
    // Public method to accelerate the sports car
    accelerate(speed: number): void {
      this.speed += speed;
      this.displaySpeed(); // Accessing protected method from the base class
    }
  }
  
  // Create instances of Car and SportsCar
  const regularCar = new Car("Toyota");
  regularCar.start();
  regularCar.stop();
  
  const sportsCar = new SportsCar("Ferrari", true);
  sportsCar.start();
  sportsCar.accelerate(50);
  sportsCar.stop();
  