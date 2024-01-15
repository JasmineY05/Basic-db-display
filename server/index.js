const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require('body-parser');
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost", 
    user: "root", 
    password: "Jy1379555MySQL!1", 
    database: "test1"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res)=> {
    const sqlSelect = "SELECT * FROM characters;";
    db.query(sqlSelect, (err, result) => {
        console.log(result);
        res.send(result);
    });
})


app.listen(3001,  () => {
    console.log("running on port 3001");
});