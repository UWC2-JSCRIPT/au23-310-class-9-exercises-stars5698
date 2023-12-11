// Donna Quach, JavaScript 310B, Autumn 2023
// Class 9 Exercises 

// Create a function createGreeting()
// - This should accept a single argument: greeting(i.e. "Hello")
// This will return a function named greet()
// - This accepts a single argument, name (i.e. "Matt")
// - This function should return the greeting combined with the name (i.e. "Hello Matt")

const createGreeting = function(greeting) {
    const greet = function(someName) {
        return `${greeting} ${someName}`; 
    };

    return greet; 
}; 


// Testing createGreeting()
const myFirstGreeting = createGreeting('Hi there'); 
console.log(myFirstGreeting('Donna')); 