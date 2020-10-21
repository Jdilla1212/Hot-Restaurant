// use express
const { table } = require("console");
const express = require("express");
const path = require("path");
const tableArray = require("./Array/table.js");
const tables = require("./Array/table.js");
const waitList = require("./Array/waitingList.js");
// console.log(tables, waitList);

const app = express();

// PORTS

const PORT = 3000;



app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());



app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "html/home.html"));
});

app.get("/reservation", function (req, res) {
    res.sendFile(path.join(__dirname, "html/reservations.html"));
});

app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "html/tables.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(tables);
});

app.get("/api/waitingList", function (req, res) {
    return res.json(waitList);
});


app.post("/api/tables", function (req, res) {
    if (tables.length < 5) {
        tables.push(req.body)
    } else {
        waitList.push(req.body)
    }
});

app.listen(PORT, function () {
    console.log("Welcome to port: " + PORT);
})