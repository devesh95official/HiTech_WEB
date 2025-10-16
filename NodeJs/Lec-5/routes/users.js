const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//mini database
const users = [
    {"id":1,"name":"Devesh"},
    {"id":2,"name":"Nikhil"}
];

//get requests
router.get('/',(req,res)=>{
    res.json(users);
});

router.get('/:id',(req,res)=>{
     const id = parseInt(req.params.id);
     const index = users.findIndex(u => u.id === id);
     if(index !== -1){
        res.json(users[index]);
     }
     else{
        res.status(404).json({
            "response":"User Not Found"
        });
     }
});

//post requests
router.post('/',(req,res)=>{
    const user = req.body;
    users.push(user);
    res.status(201).json({
        "response":"User Added"
    });
});

//update requests
router.put('/:id',(req,res)=>{
     const id = parseInt(req.params.id);
     const index = users.findIndex(u => u.id === id);
     if(index !== -1){
        const user = req.body;
        users[index].name = user.name;
        res.json({
            "response":"User Updated"
        });
     }
     else{
        res.status(404).json({
            "response":"User Not Found"
        });
     }
});

//delete requests
router.delete('/:id',(req,res)=>{
     const id = parseInt(req.params.id);
     const index = users.findIndex(u => u.id === id);
     if(index !== -1){
       users.splice(index,1);
       res.json({
        "response":"User Deleted"
       });
     }
     else{
        res.status(404).json({
            "response":"User Not Found"
        });
     }
});

module.exports = router;