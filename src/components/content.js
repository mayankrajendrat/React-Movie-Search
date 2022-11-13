import React from 'react';

const content = ({ movie }) => {
	return (
		<div className="content-container">
			{movie.Response !== 'False' ? (
				<div className="content-wrap">
					<img src={movie.Poster} alt="" className="content-img" />
					<div className="content">
						<h2 className="title">{movie.Title}</h2>
						<small>Written by {movie.Writer}</small>
						<div className="details-container">
							<h3 className="sub-title">Movie Details</h3>
							<div className="details-flex">
								<h4>Plot:</h4>
								<p>{movie.Plot}</p>
								<div className="line-cont">
									<h4>Language:</h4>
									<p>{movie.Language}</p>
								</div>
								<div className="line-cont">
									<h4>Actors:</h4>
									<p>{movie.Actors}</p>
								</div>
								<div className="line-cont">
									<h4>Director:</h4>
									<p>{movie.Director}</p>
								</div>
								<div className="line-cont">
									<h4>Runtime:</h4>
									<p>{movie.Runtime}</p>
								</div>
								<div className="line-cont">
									<h4>Released:</h4>
									<p>{movie.Released}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="content-container">
					<h4>This movie does not exist...</h4>
				</div>
			)}
		</div>
	);
};

export default content;
