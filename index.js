// • Create a variable named miles and assign a numeric value representing distance in miles.
// • Calculate the equivalent distance in kilometers using the conversion factor (1 mile = 
// 1.60934 kilometers). You can achieve this by multiplying miles by 1.60934.
// • Store the converted distance in kilometers in a variable named kilometers.
// • Use console.log to print a message in the following format: 
// The distance of 130 kms is equal to 209.2142 miles
let miles = 130;
let kilometers = 1.60934;
let conversion = miles * kilometers;
console.log(`The distance of 130 miles is equals to ${conversion} kilometers`);
// The distance of 130 kms is equal to 209.2142 miles
// 4.Functions:
// • Set up two different variables with different values.
// • Call a function with these variables as arguments and output the result using console.log.
// • Output a confirmation message if the name is known, otherwise output a default response
let variable1 = "Mehwish";
let variable2 = 27;
let profile_1 = function () {
    console.log(variable1, variable2);
};
profile_1();
let variable3 = "Thursday";
let variable4 = "mehwishnaz366@gmail.com";
let profile_2 = function () {
    console.log(variable1, variable2, variable3, variable4);
};
profile_2();
// 5.Calculator project using function:
// • Set up two variables containing number values.
// • Set up a variable to hold an operator (+ or -).
// • Create a function that takes two numbers and an operator as parameters, performs the 
// corresponding operation, and returns the result.
// • Call the function with the variables and operator, and output the result using console.log.
// • Update the operator value and call the function again with the updated arguments.
// let two variables contain number values
let num1 = 10;
let num2 = 5;
// let a variable to contain an operator (+ or -)
let operator = '+ ';
// Create a function to perform the operation
function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            return "Invalid operator";
    }
}
operator = '+';
console.log(`Result of ${num1} ${operator} ${num2}:`, calculate(num1, num2, operator));
// Update the operator value and call the function again with the updated arguments
operator = '-';
console.log(`Result of ${num1} ${operator} ${num2}:`, calculate(num1, num2, operator));
// 6.Anonymous functions:
// • Assign a function expression to a variable, with one parameter that outputs the provided 
// argument to the console.
// • Pass an argument into the function.
// • Create the same function as a normal function declaration.
// Create function as normal function declaration
function introduction(name) {
    console.log(name);
}
// Pass an argument into the function
introduction("Hello! My name is MehwishNaz");
export {};
