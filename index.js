const express = require('express');
const cors = require("cors");
const usersRouter = require('./routes/users');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);


app.get("/", (req, res) => {
    res.send("welcome to Pay Manager");
    });

app.listen(port, () => {
    console.log(`*********************************`);
    console.log(`Pay Manager is running on port ${port}`);
});