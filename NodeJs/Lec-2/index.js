// Server Using Express
const express = require('express');
const app = express();

const users = [{"id":1 ,"Naam":"Devesh", "Branch":"IT"},
    {"id":2 ,"Naam":"Deepak", "Branch":"Pata Nhi"},
    {"id":3 ,"Naam":"Muskan", "Branch":"BCA"}
];

// api endpoint
app.get('/api/user',(req,res)=>{
    res.status(404).send("Hello Dunia status galat hai!!");
});

app.get('/api/jankari',(req,res)=>{
    res.json(users);
});

// post
app.post('/api/jankari',(req,res)=>{
    console.log("kar dia post");
});
// put
app.put('/api/jankari',(req,res)=>{
    console.log("kar dia update");
});
// delete
app.delete('/api/jankari',(req,res)=>{
    console.log("kar dia delete");
});

// server running
app.listen(3000,()=>{
    console.log(`Server chalne laga , Kidher? 3000 port pe,
         Jaake khud dekhlo!!`);
});