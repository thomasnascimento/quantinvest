function Stock(props) {
    return (
        <div>{props.prices}</div>
    )
}

export async function getStaticProps() {
    const prices = await yahooStockPrices.getHistoricalPrices(0, 6, 2020, 0, 8, 2020, 'ABEV3.SA', '1d');
    console.log(prices);

    return {
        props: {
            prices
        },
        revalidate: 1
    }
}

export default Stock;