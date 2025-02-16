// your code starts here
const textcounter = document.querySelector('#counter-text');
const addButton = document.querySelector('#button-add');
const subtractButton = document.querySelector('#button-subtract');
let counterVal = 0;

// Event listener for the "Add" button
addButton.addEventListener('click', function(event) {
    // Get the current number from the counter display and convert it to a number
    counterVal = Number(textcounter.textContent);

    // Increment the counter value
    counterVal++;

    // Update the counter display with the new value
    textcounter.textContent = counterVal;
});

// Event listener for the "Subtract" button
subtractButton.addEventListener('click', function(event) {
    // Get the current number from the counter display and convert it to a number
    counterVal = Number(textcounter.textContent);

    // Decrease the counter value
    counterVal--;

    if (counterVal < 0) {
        return; // Exit early, don't subtract
    }

    // Update the counter display with the new value
    textcounter.textContent = counterVal;

    
});

