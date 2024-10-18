// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greet method to the Person prototype
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}, I am ${this.age} years old`;
};

// Employee constructor function
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call the Person constructor to inherit properties
    this.jobTitle = jobTitle;
}

// Inherit from Person prototype
Employee.prototype = Object.create(Person.prototype);

// Set the constructor reference back to Employee
Employee.prototype.constructor = Employee;

// Add jobGreet method to the Employee prototype
Employee.prototype.jobGreet = function () {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
