import React from 'react'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'trading-view.p.rapidapi.com'
	}
};

fetch('https://trading-view.p.rapidapi.com/auto-complete?text=tesla&lang=en', options)
	.then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
    
    function Stocks() {
      return (
        <div>Stocks</div>
      )
    }
    
    export default Stocks