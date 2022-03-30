import question from "../src/cli.js";
import answer from "../src/gcd_game.js";
console.log("Welcome to the Brain Games!");
let name = question();
console.log('Find the greatest common divisor of given numbers.');
answer(name);