import React, { useState } from 'react'
import { useEffect } from 'react';

import './Home.css'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7a201ff920msh788088c7da888bbp187279jsn887f82efe663',
		'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
	}
};

function Home() {
	const {news,setNews} = useState('')
	useEffect(()=> {fetch('https://real-time-finance-data.p.rapidapi.com/search?query=Apple', options)
	.then(response => response.json())
	.then(response => console.log("news", response.data.stock[0]))
	.catch(err => console.error(err));
})

  return (
    <div className='home-container'>
    
    </div>
  )
}

export default Home	