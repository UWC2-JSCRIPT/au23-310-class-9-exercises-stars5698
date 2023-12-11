// Donna Quach, JavaScript 310B, Autumn 2023
// Class 9 Exercises 

// Create a function createMessageHolder
// This function should create an empty array of messages, and should then return an object with the following methods:
// addMessage method that adds a message to the array
// getMessageMessage(index) method that returns the message at index 

const createMessageHolder = function() {
    // Empty array of messages 
    let messages = []; 

    const messageHolderObject = {
        addMessage : (message) => {
            messages.push(message); 
        }, 

        getMessage : (index) => {
            if(index > -1 && index < messages.length) {
                return messages[index];   
            }
        }
    }

    return  {

        messageHolderObject
           
    };
}; 

const holdMessage = createMessageHolder().messageHolderObject;
holdMessage.addMessage('Hello there!');
holdMessage.addMessage('How was your day?');
holdMessage.addMessage('It is a nice day today!');

console.log(holdMessage.getMessage(1));
console.log(holdMessage.getMessage(0));
console.log(holdMessage.getMessage(2)); 