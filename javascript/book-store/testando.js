import { execSync } from 'child_process';
import fs from 'fs';

let data = fs.readFileSync(`C:\\works\\Exercism\\Exercism-Solutions\\javascript\\book-store\\tese.txt`, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('everything allright!')
    }

})
data = data.match(/<div class="--title">[a-zA-Z 0-9 ']+/gmi).join('').replaceAll(' ', '-').replaceAll("'", '').toLowerCase();
data = data.split('<div-class="--title">');
data.shift();

let failedDownloads = [];


data.forEach(exercise => {
    let alreadyDownloadedExercises = fs.readdirSync('C:\\works\\Exercism\\Exercism-Solutions\\javascript')

    if(!alreadyDownloadedExercises.includes(exercise)) {
        try {
            execSync(`exercism download --exercise=${exercise} --track=javascript`)
        }
        catch (err) {
            console.log(`Failed to download ${exercise}`);
            failedDownloads.push(exercise);
            return;
        }
    }
})

console.log('COMPLETED!');
console.log(failedDownloads);

/**
 * [
  'lucians-luscious-lasagna', - syntax
  'd', - regex failed

  // not unlocked yet

  'zebra-puzzle',
  'rest-api',
  'go-counting'
]
 */