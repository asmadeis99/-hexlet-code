import readlineSync from "readline-sync";

let answer = (name) => {
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let i = 0;

  while (i < 3) {
    let random = getRandomIntInclusive(2, 20);

    function isPrime(random) {
      if (random === 2) {
        return "yes";
      }

      let i = 2;
      const limit = Math.sqrt(random);
      while (i <= limit) {
        if (random % i === 0) {
          return "no";
        }
        i += 1;
      }

      return "yes";
    }

    let check = isPrime(random);

    let answer = readlineSync.question("Question: " + random);
    if (answer === check) {
      console.log("Correct!");
      i++;
    } else {
      return console.log(
        '"' +
          answer +
          '"' +
          " is wrong answer ;(. Correct answer was " +
          '"' +
          check +
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
