// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
    constructor(data) {
      // data can either be a string or an array of numbers
      if (typeof data === "string") {
        this.data = data.split(",").map(Number); // Convert string to an array of numbers
      } else {
        this.data = data;
      }
    }
  
    count() {
      return this.data.length;
    }
  
    printNumbers() {
      this.data.forEach((num, index) => console.log(`Index ${index}: ${num}`));
    }
  
    odds() {
      return this.data.filter(num => num % 2 !== 0);
    }
  
    evens() {
      return this.data.filter(num => num % 2 === 0);
    }
  
    sum() {
      return this.data.reduce((acc, num) => acc + num, 0);
    }
  
    product() {
      return this.data.reduce((acc, num) => acc * num, 1);
    }
  
    greaterThan(target) {
      return this.data.filter(num => num > target);
    }
  
    howMany(target) {
      return this.data.filter(num => num === target).length;
    }
  }
  
  // Prompt the user for a list of integers separated by commas
  const str = prompt("Enter some numbers, like this", "1,2,3,3,5,9");
  
  // Create an instance of Numbers
  const n1 = new Numbers(str);
  console.log(n1.count()); // Returns count of numbers
  n1.printNumbers(); // Prints the number along with their indexes
  console.log(n1.odds()); // Returns odd numbers
  console.log(n1.evens()); // Returns even numbers
  console.log(n1.sum()); // Returns sum of numbers
  console.log(n1.product()); // Returns product of numbers
  console.log(n1.greaterThan(3)); // Returns numbers greater than another number
  console.log(n1.howMany(3)); // Returns the count of a specific number
  