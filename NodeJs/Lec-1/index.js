// Server Using Express
const express = require('express');
const app = express();

const users = [{"id":1 ,"Naam":"Devesh", "Branch":"IT"},
    {"id":2 ,"Naam":"Deepak", "Branch":"Pata Nhi"},
    {"id":3 ,"Naam":"Muskan", "Branch":"BCA"},
    {"id":4 ,"Naam":"Nandini", "Branch":"AIML"}
];

// api endpoint
app.get('/api/user',(req,res)=>{
    res.send(`Hello Dunia! <h1> I am the response!!</h1>`);
});

app.get('/api/jankari',(req,res)=>{
    res.json(users);
});

// server running
app.listen(3000,()=>{
    console.log(`Server chalne laga , Kidher? 3000 port pe,
         Jaake khud dekhlo!!`);
});