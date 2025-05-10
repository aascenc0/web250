// function to validate required fields
function validateFields() {
    // list of required field IDs
    const fields = ['first-name', 'last-name', 'total', 'default-word'];
    
    // add additional field IDs for divisors and words
    for (let i = 1; i <= 3; i++) fields.push('divisor-' + i, 'word-' + i);

    // check each field for a value
    for (let j = 0; j < fields.length; j++) {
        const value = document.getElementById(fields[j]).value.trim();
        // alert user if any field is empty
        if (!value) {
            alert(fields[j].replace(/-/g, ' ') + ' is required!');
            return false;
        }
    }
    return true;
}

// event listener for the generate button
document.getElementById("generate-button").addEventListener("click", function () {
    if (!validateFields()) return; // Validate fields before proceeding

    // get the maximum number from the total field or default to 125
    const maxNumber = parseInt(document.getElementById("total").value) || 125;
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = ""; // clear previous results

    const divisors = [], words = [];
    
    // collect divisor and word values from input fields
    for (let i = 1; i <= 3; i++) {
        divisors.push(parseInt(document.getElementById('divisor-' + i).value));
        words.push(document.getElementById('word-' + i).value.trim());
    }
    
    let output = ""; // initialize output string
    const defaultWord = document.getElementById("default-word").value.trim(); // Get the default word
    
    // loop through numbers from 1 to maxNumber
    for (let i = 1; i <= maxNumber; i++) {
        // collect words based on divisibility
        const matchedWords = divisors.reduce((acc, div, j) => i % div === 0 ? acc.concat(words[j]) : acc, []);
        
        // build the output string
        output += (i + '. ' + (matchedWords.length ? matchedWords.join(' ') : defaultWord) + '<br>');
    }
    
    resultContainer.innerHTML = output; // display the result
    
    // update greeting
const firstName = document.getElementById("first-name").value.trim();
const middleNameInput = document.getElementById("middle-name").value.trim();
let middleInitial = '';

if (middleNameInput) {
    middleInitial = middleNameInput[0].toUpperCase(); // Get first letter and convert to uppercase if desired
    if (!middleInitial.endsWith('.')) {
        middleInitial += '.';
    }
    middleInitial += ' '; // Add a space after the initial
} // If no middle name, middleInitial remains empty

const lastName = document.getElementById("last-name").value.trim();
document.getElementById("greeting").textContent = 'Welcome, ' + firstName + ' ' + middleInitial + lastName + '!';

// for reset button
document.getElementById("reset-button").addEventListener("click", function () {
    // clear all input fields
    document.querySelectorAll('input[type="text"], input[type="number"]').forEach((input) => input.value = '');
    document.getElementById("result").innerHTML = ""; // Clear the results
    // document.getElementById("greeting").textContent = ""; // Clear the greeting
};
