const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('Your Mongo url');
console.log("DB connected");
const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
//middleware
app.use(express.json());//parse JSON strings

//routes
const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');
app.use('/',homeRoutes);
app.use('/users',userRoutes);

//run server
app.listen(3000,()=>{
    console.log(`Server Running Succesfully at Port : 3000`);
});