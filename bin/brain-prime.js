import question from "../src/cli.js";
import answer from "../src/prime_game.js";
console.log("Welcome to the Brain Games!");
let name = question();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
answer(name);