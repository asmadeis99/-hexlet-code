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
    const random1 = getRandomIntInclusive(1, 100);
    let answer = readlineSync.question("Question: " + random + " " + random1);
    let gcd = (random, random1) => {
      if (random1 > random) return gcd(random1, random);
      if (!random1) return random;
      return gcd(random1, random % random1);
    };
    let nod = gcd(random, random1);

    if (Number(answer) === Number(nod)) {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' +
          answer +
          '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' +
          nod +
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
