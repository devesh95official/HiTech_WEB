const express = require('express');
const app = express();

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