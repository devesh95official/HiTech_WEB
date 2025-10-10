const fs = require('fs');

// sync
fs.writeFileSync('data.txt', 'Hello students , Kaise Ho !!');
fs.writeFileSync('data1.json', `{"id": 1,"Kaam":"Karta Nahi"}`);

console.log(fs.readFileSync('data.txt', 'utf8'));
console.log(fs.readFileSync('data1.json', 'utf8'));

// async
fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) return console.error(err);
  console.log('async read ->', data);
})