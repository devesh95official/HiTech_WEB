const express = require("express");
const app = express();
const connectDB = require("./db/conn.js");
const tasksRoute = require("./routes/tasks.js");
require("dotenv").config();

// middleware
app.use(express.static('./public'))
app.use(express.json());

app.use('/api/v1/tasks', tasksRoute);

const port = process.env.PORT || 3000;
// Setting up Database and Server to run in async
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log("MongoDB Connected!");
        app.listen(port, () => {
            console.log(`Server running at port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}
start();