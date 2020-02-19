import React from 'react';

const Nav = () => {
    return (
        <nav className="navbar navbar-dark fixed-top navbar-expand-md navbar-no-bg">
			<button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			    <span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
			    <ul className="navbar-nav ml-auto">
		            <li className="nav-item">
			            <a className="nav-link scroll-link" href="#about">About</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link scroll-link" href="#project">Projects</a>
					</li>
					<li className="nav-item">
			            <a className="nav-link scroll-link" href="#technology">Technologies</a>
			        </li>
			        <li className="nav-item">
			            <a className="nav-link scroll-link" href="#contact">Contact</a>
			        </li>
			    </ul>
			</div>
		</nav>
    );
};

export default Nav