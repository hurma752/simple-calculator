#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number.", type: "number", name: "FirstNumber" },
    { message: "Enter your second number.", type: "number", name: "SecondNumber" },
    {
        message: "select the operation.",
        type: "list",
        name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operation === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operation === "Division") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select valid operator.");
}
console.log("The End!!!");
