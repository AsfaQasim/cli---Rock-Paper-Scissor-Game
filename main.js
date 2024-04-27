#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.italic("\n\t <<<<========== Welcome to 'Asifa Qasim' Rock,Paper,Scissor game ==========>>>> \n"));
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerGuessed = "dummy";
if (randomNumber === 1) {
    computerGuessed = "Rock";
}
if (randomNumber === 2) {
    computerGuessed = "Paper";
}
if (randomNumber === 3) {
    computerGuessed = "Scissor";
}
let user = await inquirer.prompt([
    {
        name: "Guessed",
        type: "list",
        message: (chalk.bgCyan.bold("Guessed a Rock,Paper,Scissor")),
        choices: ["Rock", "Paper", "Scissor"]
    }
]);
if (user.Guessed === computerGuessed) {
    console.log("Its A tie!");
}
else if (user.Guessed === "Rock" && computerGuessed === "Scissor" ||
    user.Guessed === "Scissor" && computerGuessed === "Paper" ||
    user.Guessed === "Paper" && computerGuessed === "Rock") {
    console.log(chalk.bgGray.italic("Congratulations you win!"));
}
else {
    console.log(chalk.bgGray.italic("Unfortunately you have been defeated!"));
}
