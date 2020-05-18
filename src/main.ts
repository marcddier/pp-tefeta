import { readFileSync, readdirSync } from 'fs';

const files = readdirSync('data/maps');

const react1 = readFileSync('data/maps/'+files[1], 'utf-8');

// console.log(react1);

const fileAsArray = react1.split('\n');

fileAsArray.forEach(line => {
  if (line == fileAsArray[1]) {
    console.log('not this line');
    return true;
  }
  console.log(line)
});

// console.log(files)
