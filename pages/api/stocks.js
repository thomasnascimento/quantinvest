const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=ABEV3.SA&region=BR",
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "658d1c4a73msh4e30ca46c927af4p143700jsnee22c5ecae2f",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
    }
};

$.ajax(settings).done(function (response) {
    console.log(response);
})