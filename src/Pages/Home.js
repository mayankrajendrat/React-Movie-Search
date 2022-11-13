import React, { useState, useEffect } from 'react';

import Content from './../components/content';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const [searchText, setSearchText] = useState('The Avenger');

	useEffect(() => {
		const fetchMovie = async () => {
			try {
				const response = await fetch(
					`https://www.omdbapi.com/?t=${searchText}&apikey=${process.env.REACT_APP_API_KEY}`
				);
				const data = await response.json();
				setMovie(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		fetchMovie();
	}, [searchText]);

	if (loading) {
		return (
			<section className="section loading">
				<h1>Loading...</h1>
			</section>
		);
	}
	return (
		<div>
			<Navbar />
			<div className="search-container">
				<form className="search-form">
					<input
						type="text"
						className="search-field"
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						placeholder="Search for your favourite movie here..."
					/>
				</form>
			</div>
			{searchText ? (
				<Content movie={movie} />
			) : (
				<div className="content-container">
					<h4>Please type any movie you wish to search...</h4>
				</div>
			)}
			<Footer />
		</div>
	);
};

export default Home;
