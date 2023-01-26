import React, {useEffect, useState} from 'react'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

function Crypto() {
	const [dataCoin, setDataCoin] = useState([]);
	const [dataStats, setDataStats] = useState({});
  
	const [loading, setLoading] = useState(true);
	const fetchData = async () => {
	  fetch(
		"https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0",
		options
	  ).then(async (data) => {
		const temp = await data.json();
		if (temp) {
		  setLoading(false);
		  console.log(temp.data.stats);
		  setDataCoin(temp.data.coins);
		  setDataStats(temp.data.stats);
		}
	  });
	};
  
	useEffect(() => {
	  fetchData();
	}, []);
  
	const tableHeader = () => {
	  return [
		"uuid",
		"symbol",
		"name",
		"color",
		"btcPrice",
		"iconUrl",
		"coin Ranking url",
		"Low volume",
		"Price",
		"Market Cap",
		"change",
		"tier",
	  ].map((data) => {
		return <td key={data}>{data}</td>;
	  });
	};
  
	const returnTableData = () => {
	  return dataCoin.map((data) => {
		const {
		  uuid,
		  symbol,
		  name,
		  color,
		  iconUrl,
		  price,
		  lowVolume,
		  tier,
		  marketCap,
		  coinrankingUrl,
		  change,
		  btcPrice,
		} = data;
		return (
		  <tr key={uuid}>
			<td>{uuid}</td>
			<td>{symbol}</td>
			<td>{name}</td>
			<td>{color}</td>
			<td>{btcPrice}</td>
			<td>{iconUrl}</td>
			<td>{coinrankingUrl}</td>
			<td>{lowVolume}</td>
			<td>{price}</td>
			<td>{marketCap}</td>
			<td>{change}</td>
			<td>{tier}</td>
		  </tr>
		);
	  });
	};
  
	return (
	  <div className="table-data">
		<h3>CRYPTO DETAILS</h3>
		<h2>STATS</h2>
		{!loading && (
		  <>
			<h3>Total: {dataStats.total}</h3>
			<h3>Total Coins: {dataStats.totalCoins}</h3>
			<h3>Total Markets: {dataStats.totalMarkets}</h3>
			<h3>Total Exchanges: {dataStats.totalExchanges}</h3>
		  </>
		)}
		<br></br>
		<br></br>
		<h2>COINS</h2>
		{!loading ? (
		  <>
			<table className="styled-table">
			  <thead>
				<tr>{tableHeader()}</tr>
			  </thead>
			  <tbody>{returnTableData()}</tbody>
			</table>
		  </>
		) : (
		  <h4>Loading...</h4>
		)}
	  </div>
	);
  }
  
      export default Crypto