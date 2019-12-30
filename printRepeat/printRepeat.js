// I first ran the code to see what it was returning
// I noticed there was a off by one error as everything was printing an extra time
// I also noticed the number was being printed along with the string
// I added a -1 after i < times to fix the off by one error
// I removed the -1 after the currentLine.indexOf(' ') to actually get the index of the correct space
// I saw the first test file working so I tried the second and noticed the zero one printed when it shouldn't have
// I tried putting an if statement to check if the number is 0, that didn't work
// I then wrapped the call to repeat in a if statement to make sure times doesn't equal zero which fixed the issue
// I tested the third test file and it worked correctly

const fs = require('fs');
const path = require('path');

if (process.argv.length <= 2) {
  console.error('You must enter a file name.');
  process.exit(1);
}

const repeat = (times, callback) => {
  for (let i = 0; i < times-1; i++) {
    callback();
  }
};

let currentLine = '';
const print = () => {
  const text = currentLine.substring(currentLine.indexOf(' '));
  console.log(text);
  return print;
}

const filePath = path.join(__dirname, process.argv[2]);
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  const lines = data.split('\n');
  lines.forEach(line => {
    currentLine = line;
    const times = Number(line.substring(0, line.indexOf(' ')));
    if(times !== 0) {
      repeat(times, print());
    }
  });

  process.exit(0);
});