// @ts-nocheck
import React from 'react';
import GoBackToHome from '../components/GoBacktoHome';







// ✅ INTERFACE — defines expected structure for implementing classes
//
interface Flyable {
  fly(); //_________ void means no return value
}







// ✅ ABSTRACT CLASS — defines a base blueprint, cannot be instantiated directly
//
abstract class Vehicle {
  // Abstract method — must be implemented by subclasses
  abstract getType();

  // Concrete method — shared behavior
  start() {
    return `${this.getType()} is starting...`;
  }
}







// ✅ MAIN CLASS with key TypeScript class features
//
class Car extends Vehicle {
  private speed;            // ❌ Not accessible outside this class
  protected fuel;           // ☑️ Accessible in this and child classes
  readonly brand;           // 🧊 Immutable once set via constructor
  static totalCars = 0;     // 📦 Shared across all instances

  constructor(model, brand, speed = 0, fuel = 100) {
    super();                        // 🔁 Call parent (Vehicle) constructor
    this.model = model;            // Public via shorthand
    this.speed = speed;
    this.fuel = fuel;
    this.brand = brand;
    Car.totalCars++;               // 📈 Increment static count
  }

  //
  // ✅ GETTER — access like `car.currentSpeed`
  //
  get currentSpeed() {
    return this.speed;
  }

  //
  // ✅ SETTER — assign like `car.currentSpeed = 100`
  //
  set currentSpeed(value) {
    if (value < 0) throw new Error("Speed can't be negative");
    this.speed = value;
  }

  // ✅ Implements abstract method
  getType() {
    return "Car";
  }

  //
  // ❌ PRIVATE METHOD — inaccessible outside class
  //
  private secretEngineCode() {
    return "🔒 SecretEngineV12-X";
  }

  //
  // ☑️ PROTECTED METHOD — only available within this class and subclasses
  //
  protected consumeFuel() {
    this.fuel -= 10;
    return `Fuel left: ${this.fuel}`;
  }

  //
  // ✅ PUBLIC PROXY to access private method (safe exposure)
  //
  getSecretEngineCode() {
    return this.secretEngineCode();
  }

  //
  // ✅ PUBLIC PROXY to access protected method
  //
  useFuel() {
    return this.consumeFuel();
  }

  //
  // ✅ NORMAL PUBLIC METHOD
  //
  drive() {
    return `${this.brand} ${this.model} driving at ${this.speed} km/h`;
  }

  //
  // ✅ STATIC METHOD — called on class itself, not instance
  //
  static stats() {
    return `Total cars built: ${Car.totalCars}`;
  }
}






// ✅ SUBCLASS — inherits from Car, implements Flyable
//
class FlyingCar extends Car implements Flyable {
  fly() {
    return `${this.model} is now flying!`;
  }

  // ✅ Overrides getType()
  override getType() {
    return "FlyingCar";
  }
}






// ✅ REACT CLASS COMPONENT — integrates everything
//
class TsClassExample extends React.Component {
  state = {
    log: []
  };

  // ✅ Instantiate a car instance once
  car1 = new Car("Model S", "Tesla");

  //
  // ✅ Public method access is straightforward
  //
  handlePublicAccess = () => {
    const msg = this.car1.drive();
    this.setState(prev => ({ log: [...prev.log, `✅ Public: ${msg}`] }));
  };

  //
  // ❌ Private method cannot be accessed directly
  // ✅ So we use a public proxy inside the class
  //
  handlePrivateAccess = () => {
    try {
      const msg = this.car1.getSecretEngineCode(); // via proxy
      this.setState(prev => ({
        log: [...prev.log, `✅ Private (via proxy): ${msg}`]
      }));
    } catch (err) {
      this.setState(prev => ({
        log: [...prev.log, `❌ Private: Cannot access directly`]
      }));
    }
  };

  //
  // ☑️ Protected method can't be accessed directly, but we expose it safely
  //
  handleProtectedAccess = () => {
    const msg = this.car1.useFuel(); // via proxy
    this.setState(prev => ({
      log: [...prev.log, `✅ Protected (via proxy): ${msg}`]
    }));
  };

  render() {
    return (
      <div style={{ fontFamily: "sans-serif" }}>
        <GoBackToHome />
        <h2>TypeScript Class Access Modifiers Demo</h2>

        <div style={{ marginBottom: "1rem" }}>
          <button type="button" onClick={this.handlePublicAccess}>Call Public Method</button>{" "}
          <button type="button" onClick={this.handlePrivateAccess}>Call Private Method</button>{" "}
          <button type="button" onClick={this.handleProtectedAccess}>Call Protected Method</button>
        </div>

        <ul>
          {this.state.log.map((entry, idx) => (
            <li key={idx}>{entry}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TsClassExample;