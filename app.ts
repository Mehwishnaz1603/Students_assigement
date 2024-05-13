// 2.Evaluating a number game: // • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value. // • Output the result indicating 
// whether the ente5red number is greater than, equal to, or less than the dynamic number value.
import inquirer from "inquirer";
let dynamicNumber = Math.round(Math.random() * 100)
console.group(dynamicNumber)
console.log("Select Numbers 1 to 100")
async function dynamic() {
    let userInput = await inquirer.prompt([{
        name: "Number", type: "input", message: "Enter the Number:" }]);
 let userNumber = (userInput.Number);
 if (userNumber < dynamicNumber) { // Compare the entered number with the dynamic number value
     console.log("Your number is less than the dynamic number.");
} else if (userNumber > dynamicNumber) {
     console.log("Your number is greater than the dynamic number.");
 } else {console.log("Your number is equal to the dynamic number.") } }
dynamic();


