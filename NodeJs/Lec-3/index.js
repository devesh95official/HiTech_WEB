const express = require('express');
const app = express();


let users = [{"id":1,"name":"Devesh"},{"id":2,"name":"Anmol"}];
// middleware
app.use(express.json());   // parse json strings

// routes
app.get('/',(req,res)=>{
    res.send("Server Running!! Sir");
});

app.get('/users',(req,res)=>{
    res.json(users);
});

app.get('/users/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    let f=0;
    for(let i=0; i < users.length; i++){
        if(users[i].id==id){
            res.json(users[i]);
            f=1;
        }
    }
    if(!f){
        res.status(404).json({"status":"Not Found"});
    }
});

app.post('/users',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.send(`Success`);
});

// running server
app.listen(3000,()=>{
    console.log(`Server Running Succesfully at Port : 3000`);
});
