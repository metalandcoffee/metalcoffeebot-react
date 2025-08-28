// •	Abstraction – Hiding complex details and exposing only the essential features of something so it’s easier to work with.
// •	Encapsulation – Bundling related data and behaviors together, while restricting outside access to the internal workings.
// •	Classes as blueprints – A class defines the structure and behavior that its objects (instances) will have, like a recipe or template.
// •	Objects as instances – An object is a concrete, usable thing created from a class, with its own specific data (state).
// •	State management – Tracking and updating the current values (data) an object holds, which affect how it behaves.
// •	Single Responsibility Principle – Each class or object should have only one job or reason to change, keeping code focused and easier to maintain.

// 1. Abstraction: Define only the essential "shape" of a vehicle.
interface Vehicle {
  start(): void;
  stop(): void;
}

// 2. Encapsulation: The Car class bundles its data (state) and behavior (methods).
//    Internal details like `fuelLevel` are kept private.
class Car implements Vehicle {
  // 3. Classes as blueprints: This is the "recipe" for making Car objects.
  private fuelLevel: number; // encapsulated state

  constructor(fuelLevel: number) {
    this.fuelLevel = fuelLevel;
  }

  // 5. State management: Methods interact with and change the car’s internal state.
  start() {
    if (this.fuelLevel > 0) {
      console.log("Car started!");
    } else {
      console.log("Cannot start. Tank is empty.");
    }
  }

  drive() {
    if (this.fuelLevel > 0) {
      this.fuelLevel -= 1;
      console.log(`Driving... fuel left: ${this.fuelLevel}`);
    } else {
      console.log("Out of fuel!");
    }
  }

  stop() {
    console.log("Car stopped.");
  }
}

// 4. Objects as instances: Create concrete cars from the Car blueprint.
const myCar = new Car(3);
const yourCar = new Car(0);

// Demonstrate state management in action
myCar.start(); // Car started!
myCar.drive(); // Driving... fuel left: 2
myCar.stop();

yourCar.start(); // Cannot start. Tank is empty.

// 6. Single Responsibility Principle: 
// Notice that Car only handles "car stuff." 
// If we wanted to handle fueling logic, we’d create another class (e.g., FuelStation),
// instead of overloading Car with multiple responsibilities.