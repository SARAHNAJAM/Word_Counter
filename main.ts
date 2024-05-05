// word Counter

import inquirer from "inquirer";

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        type: "input",
        name: "sentence",
        message: "Enter a sentence to count"
    }
]);

const words = answers.sentence.trim().split(" ");

console.log(words);

console.log(`Your sentence word count is ${words.length}`);