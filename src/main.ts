import { readFileSync, readdirSync } from 'fs';

const files = readdirSync('data/maps');

const react1 = readFileSync('data/maps/' + files[1], 'utf-8');

// console.log(react1);

const fileAsArray = react1.split('\n');

let start = 0;
let end = 0;

fileAsArray.forEach((line, key) => {
  if (line == fileAsArray[0]) {
    console.log('not this line');
    return true;
  } else {
    const arrayLine = line.split('');
    arrayLine.find(e => {
      if (e == '1') {
        start = key;
      }
      if (e == '2') {
        end = key;
      }
    });
    // console.log(line);
  }
});

console.log(start);
console.log(end);

function resolve(startLine: number, nextLine: number) {
  const line = fileAsArray[startLine];
  const next = fileAsArray[nextLine];
}

resolve(start, start + 1);
// console.log(files)
