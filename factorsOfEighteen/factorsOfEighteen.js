// I first changed all var's to let's
// I turned the code into a function so I could export it to my test file
// I made the array and dividend number parameters to the fuction so it would work with any number and array of numbers
// I updated the for loop to just use an i variable instead of an idx variable defined before it
// I created a results array to hold all of the true factors
// I wrote a test and saw it pass
// I then took out the ! from each one and saw it fail to make sure it passed for the right reason
// I then added two more tests to make sure it worked for any dividend

let factorsOf = (dividend, numbersArr) => {

  let resultArr = [];

  for (i = 0; i < numbersArr.length; i++) {
    let factor;
    let divisor = numbersArr[i];

    if (dividend % divisor === 0) {
      factor = true;
    }

    if (factor) {
      resultArr.push(divisor + ' is a factor of ' + dividend + '!');
    }
  }
  return resultArr;
}

module.exports = factorsOf