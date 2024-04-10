#! /usr/bin/env node

import inquirer from "inquirer";
//take random number from computer
async function RandomNum() {
    
const randomNum= Math.floor(Math.random()*10+1);

//take input from user to guess

const answer=await inquirer.prompt([
    {
        name: "userGuess",
        type:"number",
        message:"Please guess a number between 1-10 :",
    }
])
//compare both numbers for equality
if (answer.userGuess===randomNum) {
    console.log("congratulations...! You guessed it right.");
} else{
    console.log("Sorry, you guessed it wrong");
    
}
}

RandomNum()