#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const VALID_OPTIONS = [
  'n',
  'l',
  'v',
  'i',
  'x',
]

function readLines(file) {
  const data = fs.readFileSync(path.resolve(file), { encoding: 'utf-8' });
  return data.split(/\r?\n/);
}

const ARGS = process.argv.slice(2);

let flags = [], files = [], data = [], result = [], insensitive = '', pattern = '';

ARGS.map(value => {
  let flag = VALID_OPTIONS.indexOf(value.replace('-', ''));
  let file = fs.readdirSync('data').indexOf(value.replace('data\\', ''));

  if(file !== -1) {
    files.push(value);
  } else if(flag !== -1) {
    flags.push(value.replace('-', ''));
  } else pattern += value;
});

for(let i = 0; i < files.length; i++) {
  flags.includes('i') ? insensitive = 'i' : null;
  let regex = new RegExp(pattern, 'g' + insensitive);
  data = readLines(files[i]);
  for(let j = 0; j < data.length; j++) {
    if(flags.includes('v')) {
      if(data[j].match(regex) == null) {
        flags.includes('x') ? data[j] != pattern ? result.push(data[j]) : null : result.push(data[j]);
        flags.includes('l') ? result[result.length - 1] = `${files[i]}` : null;
        files.length > 1 && !flags.includes('l') ? result[result.length - 1] = `${files[i]}:${result[result.length - 1]}` : null;
      }
    } else if(data[j].match(regex)) {
      flags.includes('x') ? data[j].toLowerCase() == pattern.toLowerCase() ? result.push(data[j]) : null : result.push(data[j]);
      flags.includes('n') ? result[result.length - 1] = `${j + 1}:${result[result.length - 1]}` : null;
      flags.includes('l') ? result[result.length - 1] = `${files[i]}` : null;
      files.length > 1 && !flags.includes('l') ? result[result.length - 1] = `${files[i]}:${result[result.length - 1]}` : null;
    }
  }
}

console.log([...new Set(result)].join('\n'));

