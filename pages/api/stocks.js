async function tempo(request, response) {
    const dynamicDate = new Date();

    const subscribersResponse = await fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=ABEV3.SA&region=BR", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "658d1c4a73msh4e30ca46c927af4p143700jsnee22c5ecae2f",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.firstTradeDate;

    response.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate');

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    });
}

export default tempo;