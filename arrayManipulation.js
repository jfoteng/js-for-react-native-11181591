//function to process an array of numbers
function processArray(numbers) {
    // use higher order function: map to create a new array
    return numbers.map(num => {
        // if num is divisible by 2
        if (num % 2 === 0){
            // square the number
            return num * num;
            // if num is not divisible by 2
        }else{
            // triple the value
            return num * 3; 
        }
    });
}


// Use case
const inputNumbers =[6,7,4,9,2,3,10,3];
const processNumbers = processArray(inputNumbers);

console.log(processNumbers); // expected result: [36, 21, 16, 27, 4, 9, 100, 9]


// Function to format an array of strings based on an array of processed numbers
function formatArrayStrings(strings, numbers) {
    if (strings.length !== numbers.length) {
        return "Both arrays must have the same length";
    }

    return strings.map((str, index) => {
        const num = numbers[index];
        if (num % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

// Use cases
// 1
const stringArray1 = ["hello", "world", "this", "is", "javascript"];

const formattedStrings = formatArrayStrings(stringArray1, processNumbers);
console.log(formattedStrings); // Output: Both arrays must have the same length


// 2
const stringArray2 = ["my", "name", "is", "joseph", "and", "i", "like", "fufu"]

const answer = formatArrayStrings(stringArray2, processNumbers);
console.log(answer);

// output
/* [
    'MY',   'name',
    'IS',   'joseph',
    'AND',  'i',
    'LIKE', 'fufu'
  ]
   */