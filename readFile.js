const fs = require('fs');
const read = (fileName) => (
    new Promise((reslve, reject) => {
        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) return reject(new Error('Error read file'));
            reslve(data);
        })
    })
);

read('note.txt')
    .then(data => console.log(data))
    .catch(err => console.log(err + ''));