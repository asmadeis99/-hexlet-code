import question from "../src/cli.js";
import answer from "../src/even_game1.js";
console.log("Welcome to the Brain Games!");
let name = question();
console.log('Answer "yes" if the number is even, otherwise answer "no"');
answer(name);
