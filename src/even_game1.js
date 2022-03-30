import readlineSync from "readline-sync";

let answer = (name) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let i = 0;

  while (i < 3) {
    const random = getRandomIntInclusive(1, 100);
    let index = readlineSync.question("Question: " + random);
    const trueAnswer = index === 'yes' ? 'no' : 'yes'
  

    if (random % 2 === 0 && index === "yes") {
      console.log("Correct!");
      i++;
    } else if (random % 2 !== 0 && index === "no") {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' + index + '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' + trueAnswer + '"' +
          "\n" +
          "Lets try again!"
      );
    }
  }
  return console.log("Congratulations, " + name + "!");
};

export default answer;
