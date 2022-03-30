import question from "../src/cli.js";
import answer from "../src/calc_game.js";
console.log("Welcome to the Brain Games!");
let name = question();
console.log('What is the result of the expression?');
answer(name);