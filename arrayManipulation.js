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
