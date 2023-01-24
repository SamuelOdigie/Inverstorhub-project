import React from 'react'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

fetch('https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));



function Crypto() {
        return (
          <div>Crypto</div>
        )
      }
      
      export default Crypto