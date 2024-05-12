// 2.Evaluating a number game:
// • Prompt the user to enter a number.
// • Compare the entered number with a dynamic number value.
// • Output the result indicating whether the ente5red number is greater than, equal to, or less 
// than the dynamic number value.
import inquirer from "inquirer";
let dynamicNumber = Math.round(Math.random() * 100);
console.log(dynamicNumber);
async function dynamic() {
    let userInput = await inquirer.prompt([{
            name: "Number",
            type: "input",
            message: "Enter the Number:"
        }]);
    // Compare the entered number with the dynamic number value
    let userNumber = (userInput.Number);
    // Compare the entered number with the dynamic number value
    if (userNumber < dynamicNumber) {
        console.log("Your number is less than the dynamic number.");
    }
    else if (userNumber > dynamicNumber) {
        console.log("Your number is greater than the dynamic number.");
    }
    else {
        console.log("Your number is equal to the dynamic number.");
    }
}
dynamic();