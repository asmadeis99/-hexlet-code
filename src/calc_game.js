import readlineSync from "readline-sync";

let answer = (name) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const array = ["+", "-", "*"];

  let i = 0;

  while (i < 3) {
    const random = getRandomIntInclusive(10, 100);
    const random1 = getRandomIntInclusive(1, 10);
    let rand = array[Math.floor(Math.random() * array.length)];
    let answer = readlineSync.question(
      "Question: " + random + " " + rand + " " + random1
    );
    let iter = eval(Number(random) + " " + rand + " " + Number(random1));

    if (Number(answer) === Number(iter)) {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' +
          answer +
          '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' +
          iter +
          '"' +
          "\n" +
          "Lets try again, " +
          name +
          "!"
      );
    }
  }
  return console.log("Congratulations, " + name + "!");
};

export default answer;
