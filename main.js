// 3.Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default  response
import inquirer from "inquirer";
async function freindCheckerGame() {
    let friendsName = await inquirer.prompt([{
            name: "friendName",
            type: "input",
            message: "Enter Your Friend Name:"
        }]);
    switch (friendsName.friendName) {
        case "Mehwish":
            console.log("Mehwish is a known friend.");
            break;
        case "Noorulain":
            console.log("Noorulain is a known friend.");
            break;
        case "Amna":
            console.log("Amna is a known friend.");
            break;
        default:
            console.log("Sorry, the name entered is not a known friend.");
    }
}
freindCheckerGame();
