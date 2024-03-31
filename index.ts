import inquirer from "inquirer";
import choices from "inquirer/lib/objects/choices.js";

// Asking Questions from users through inqurirer

let answers = await inquirer.prompt([
    {message: "Enter first Number", type: "number", name: "firstNumber"},

    {message: "Enter second Number", type: "number", name: "secondNumber"},

    {
        message: "select one Operator to perform Operations",
        type : "list",
        name: "operator",
        choices: ["Addition", "Subtraction","Multiplication", "Division"],
    }
]);

console.log(answers);

//conditional statements If-Else

if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operator === "Subtraction"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
else if (answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input")
}