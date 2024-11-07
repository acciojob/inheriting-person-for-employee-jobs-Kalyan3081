// Define the Person class
class Person {
  /**
   * Constructs a new Person instance.
   * @param {string} name - The person's name.
   * @param {number} age - The person's age.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Prints a greeting message to the console.
   */
  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
  }
}

// Define the Employee class that extends Person
// Expose the classes to the global window object for Cypress testing
window.Person = Person;
window.Employee = Employee;
