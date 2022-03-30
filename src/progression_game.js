import readlineSync from "readline-sync";

let answer = (name) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let i = 0;

  while (i < 3) {
    let random = getRandomIntInclusive(1, 100);
    let progression = [random];
    let result = random;

    for (let i = 0; progression.length < getRandomIntInclusive(5, 10); i++) {
      result = result + 2;
      progression.push(result);
    }

    let rand = progression[getRandomIntInclusive(0, progression.length - 1)];
    let censore = [];

    for (let i = 0; censore.length < progression.length; i++) {
      if (progression[i] === rand) {
        censore.push("..");
      } else {
        censore.push(progression[i]);
      }
    }
    let answer = readlineSync.question("Question: " + censore);
    if (Number(answer) === Number(rand)) {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' +
          answer +
          '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' +
          rand +
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
