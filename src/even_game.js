import readlineSync from "readline-sync";

let answer = (name) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let choise = ["yes", "no"];
  let i = 0;

  while (i < 3) {
    const random = getRandomIntInclusive(1, 100);
    let index = readlineSync.keyInSelect(choise, "Question " + random);
    console.log("Question " + random);

    if (random % 2 === 0 && choise[index] === "yes") {
      console.log("Correct!");
      i++;
    } else if (random % 2 !== 0 && choise[index] === "no") {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' + choise[index] + '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' + choise.reverse()[index] + '"' +
          "\n" +
          "Lets try again!"
      );
    }
  }
  return console.log("Congratulations, " + name + "!");
};

export default answer;
