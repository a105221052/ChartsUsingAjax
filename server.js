var fetch = require('node-fetch');
var express = require('express')
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());


app.set("views", "views/")
app.set("view engine", "ejs")


app.get("/", function (req, res) {

    res.render('index')

});

app.get("/getInfo", function (req, res) {

    fetch('http://117.56.59.17/OpenData/API/Rain/Get?stationNo=&loginId=open_rain&dataKey=85452C1D', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then((jsonData) => {
            res.send(jsonData);
        }).catch((err) => {
            console.log('錯誤:', err);
        })
});

app.listen(3000, function () {
    console.log('server run');
});




