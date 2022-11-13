import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<span>
				<Link to="/">MOVIez🎥</Link>
			</span>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/about">About</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
