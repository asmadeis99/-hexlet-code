import question from "../src/cli.js";
import answer from "../src/progression_game.js";
console.log("Welcome to the Brain Games!");
let name = question();
console.log('What number is missing in the progression?');
answer(name);