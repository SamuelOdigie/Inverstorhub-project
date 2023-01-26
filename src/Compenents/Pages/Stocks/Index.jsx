import React, {useEffect, useState} from 'react'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'trading-view.p.rapidapi.com'
	}
};

function Stocks() {
	const [loading, setLoading] = useState(true);
	const [stocks, setStocks] = useState([]);
  
	useEffect(() => {
	  fetch(
		"https://trading-view.p.rapidapi.com/auto-complete?text=tesla&lang=en",
		options
	  )
		.then(async (response) => {
		  const temp = await response.json();
		  setLoading(false);
		  setStocks(temp);
		  console.log(temp);
		})
		.catch((err) => console.error(err));
	}, []);
	return (
	  <div className="home-container">
		{!loading && (
		  <div>
			<h4>Stocks</h4>
			<table className="styled-data">
			  <thead>
				<tr>
				  <td>Symbol</td>
				  <td>Description</td>
				  <td>Type</td>
				  <td>Exchange</td>
				  <td>currency code</td>
				  <td>Title</td>
				</tr>
			  </thead>
			  <tbody>
				{stocks.map((data) => (
				  <tr key={data.symbol}>
					<td>{data.symbol}</td>
					<td>{data.description}</td>
					<td>{data.type}</td>
					<td>{data.exhange}</td>
					<td>{data.currency_code}</td>
				  </tr>
				))}
			  </tbody>
			</table>
		  </div>
		)}
	  </div>
	);
  }
  
    export default Stocks