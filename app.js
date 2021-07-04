const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();


app.get('/', (req, res, next) => {
    res.send('hello world');
    axios.get('https://query1.finance.yahoo.com/v7/finance/download/ITSA4.SA?period1=1592415483&period2=1623951483&interval=1d&events=history&includeAdjustedClose=true')
        .then()
});

const port = process.env.PORT || 5000;
app.listen(port, err => {
    if (err) return console.log(err);
    console.log('server running on port ' + port);
})