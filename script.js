// Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Add greet method to the Person prototype
greet () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
};

// Employee constructor function
function Employee(name, age, jobTitle) {
    super(name, age); // Call the Person constructor to inherit properties
    this.jobTitle = jobTitle;
}

jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
