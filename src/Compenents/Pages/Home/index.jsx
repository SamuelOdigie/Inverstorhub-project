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
	const [news, setNews] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
	  fetch(
		"https://ms-finance.p.rapidapi.com/news/list?performanceId=0P0000OQN8",
		options
	  )
		.then(async (response) => {
		  const temp = await response.json();
		  setLoading(false);
		  setNews(temp);
		  console.log(temp);
		})
		.catch((err) => console.error(err));
	}, []);
  
	return (
	  <div className="home-container">
		{!loading && (
		  <div>
			<h4  className='header'>NEWS</h4>
			<table className="styled-data">
			  <thead>
				<tr>
				  <td>ID</td>
				  <td>ProviderName</td>
				  <td>PublishedDate</td>
				  <td>sourceId</td>
				  <td>sourceName</td>
				  <td>Title</td>
				</tr>
			  </thead>
			  <tbody>
				{news.map((data) => (
				  <tr key={data.id}>
					<td>{data.id}</td>
					<td>{data.providerName}</td>
					<td>{data.publishedDate}</td>
					<td>{data.sourceId}</td>
					<td>{data.sourceName}</td>
  
					<td>{data.title}</td>
				  </tr>
				))}
			  </tbody>
			</table>
		  </div>
		)}
	  </div>
	);
  }

export default Home	                