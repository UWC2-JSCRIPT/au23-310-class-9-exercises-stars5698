// Donna Quach, JavaScript 310B, Autumn 2023
// Class 9 Exercises 

// This function should execute the callback function the number of times specified.
// When the function is being executed, the repetition number (i.e. 1 for the first call)
// should be passed to the callback.
const repeatFn = (num, callback) => {
  for(let i = 0; i < num; i++) {
    callback(i);
  }
};

const tripleNumber = (num) => {
  console.log(num * 3); 
}

// Pass in tripleNumber function as parameter into higher order function repeatFn
repeatFn(5, tripleNumber); // Will return 0, 3, 6, 9, 12

// repeatFn(5, (param) => {
//   // Console log the result of callback(i)
//   console.log(param); // Should return 0, 1, 2, 3, 4
// })

// Test repeatFn
// const addButton = num => {
//   const button = document.createElement('button');
//   button.innerText = `Button ${num}`;
//   document.querySelector('body').appendChild(button);
// };
// repeatFn(6, addButton);

// const toThePower = (num, pow) => {
//   let product = 1;
//   repeatFn(pow, () => {
//     product += product * num;
//   });
//   return product;
// };

// console.log(toThePower(3, 3));
