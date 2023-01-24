import React, { useState } from 'react'
import { useEffect } from 'react';

import './Home.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'ms-finance.p.rapidapi.com'
	}
};

function Home() {
	const {news,setNews} = useState([])
	useEffect(()=> {fetch('https://ms-finance.p.rapidapi.com/news/list?performanceId=0P0000OQN8', options)
	.then(response => response.json())
	.then(data => console.log("news", data))
	.catch(err => console.error(err));
})

  return (
    <div className='home-container'>
    
    </div>
  )
}

export default Home	                