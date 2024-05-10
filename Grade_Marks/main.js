import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.magenta("****************  ENTER YOUR GRADE AND RESULT ************\n"));
const marks = await inquirer.prompt([
    {
        name: "Name",
        type: "string",
        message: "Enter your Name :",
        transformer: (input) => {
            // Use for changing the color of the user input.
            return chalk.italic.blue.bold(input);
        },
    },
    {
        name: "chem",
        type: "number",
        message: "Enter your chemistry marks out of 100 :",
        transformer: (input) => {
            return chalk.italic.green.bold(input);
        },
    },
    {
        name: "computer",
        type: "number",
        message: "Enter your computer marks out of 100 :",
        transformer: (input) => {
            return chalk.italic.green.bold(input);
        },
    },
    {
        name: "math",
        type: "number",
        message: "Enter your Maths Marks out of 100:",
        transformer: (input) => {
            return chalk.italic.green.bold(input);
        },
    },
    {
        name: "Eng",
        type: "number",
        message: "Enter your English Marks out of 100 :",
        transformer: (input) => {
            return chalk.italic.green.bold(input);
        },
    },
    {
        name: "urd",
        type: "number",
        message: "Enter your Urdu Marks out of 100:",
        transformer: (input) => {
            return chalk.italic.green.bold(input);
        },
    },
]);
let obtainedMarks = 500;
// console.log(chalk.italic.yellow("Obtained Marks:", + obtainedMarks));
let result = parseInt(marks.chem + marks.math + marks.Eng + marks.urd); ///All marks add
console.log(chalk.italic.redBright(`\n OBTAINED MARKS : ${chalk.bold.yellow(500)} / ${chalk.bold.yellow(result)}`));
let percentage = (result / obtainedMarks) * 100; //percentage formula
console.log(chalk.italic.blue.bold.underline("\nPercentage: 🌟 ", percentage.toFixed(2) + "%"));
if (percentage <= 100 && percentage >= 80) {
    console.log(chalk.italic.magenta.bold("\n🌟CONGRATULATIONS YOUR GRADE is (A+1)🌟 👍"));
}
else if (percentage <= 80 && percentage >= 70) {
    console.log(chalk.italic.green.bold("\nA GRADE 😊"));
}
else if (percentage < 70 && percentage >= 60) {
    console.log(chalk.italic.bold.green("\nB GRADE 😊"));
}
else if (percentage < 60 && percentage >= 50) {
    console.log(chalk.italic.green.bold("\nC GRADE 😊"));
}
else if (percentage < 50 && percentage >= 40) {
    console.log(chalk.italic.green.bold("\nD GRADE 😊"));
}
else {
    console.log(chalk.bold.bgBlue("\n**** FAIL **"));
}
