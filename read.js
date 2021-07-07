'use strict';

const fs = require('fs');

fs.readFile('users.json', (err, data) => {
    if (err) throw err;
    let users = JSON.parse(data);
    console.log(users);
});

console.log('This is after the read call');