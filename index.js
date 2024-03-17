const express = require('express');
const cors = require("cors");
const usersRouter = require('./routes/users');
const employeesRouter = require('./routes/employees');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter);
app.use('/employees', employeesRouter);


app.get("/", (req, res) => {
    res.send("Welcome To Pay Manager");
    });

app.listen(port, () => {
    console.log(`*********************************`);
    console.log(`Pay Manager is running on port ${port}`);
});