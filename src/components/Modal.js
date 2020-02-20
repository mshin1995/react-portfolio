import React from 'react';

const Modal = () => {
    return (
        <div className="modal fade" id="gameModal" tabindex="-1" role="dialog" aria-labelledby="gameModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div className="modal-content">
					<div className="modal-header">
				  		<h5 className="modal-title bold" id="gameModalLabel">Game-UP</h5>
				 		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div className="modal-body">
						<div id="gameCarousel" className="carousel slide">
							<ol className="carousel-indicators">
								<li data-target="#gameCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#gameCarousel" data-slide-to="1"></li>
								<li data-target="#gameCarousel" data-slide-to="2"></li>
								<li data-target="#gameCarousel" data-slide-to="3"></li>
								<li data-target="#gameCarousel" data-slide-to="4"></li>
							</ol>
							<div className="carousel-inner">
							  	<div className="carousel-item active">
									<img className="d-block w-100" src="assets/img/projects/GameUP5.png" alt="First slide">
							 	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/GameUP2.png" alt="Second slide">
							  	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/GameUP3.png" alt="Third slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/GameUP4.png" alt="Fourth slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/GameUP.gif" alt="Fifth slide">
							  	</div>
							</div>
							<a className="carousel-control-prev" href="#gameCarousel" role="button" data-slide="prev">
							  	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#gameCarousel" role="button" data-slide="next">
							  	<span className="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Next</span>
							</a>
						</div>
						<hr>
						<p className="modal-text">
							Game-UP is a web application for video game enthusiasts to get information on any game and stay up to date with recent gaming news. 
							The frontend was built using React and the backend was built using Ruby on Rails. 
							Any user is able to go on the website to search for video games by title. 
							Upon creating an account, they are able to make personalized lists of video games, such as "favorites" or "wants". 
							The application also implements Google OAuth for individual user verification. All of the video game data is pulled from the IGDB API.
							Semantic UI was used for some of the styling as well.
						</p>
					</div>
					<div className="modal-footer">
						<a className="btn btn-primary btn-link-1" href="https://github.com/mshin1995/game-up-frontend" target="_blank"><i className="fab fa-github"></i></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>

		<div className="modal fade" id="dinoModal" tabindex="-1" role="dialog" aria-labelledby="dinoModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div className="modal-content">
					<div className="modal-header">
				  		<h5 className="modal-title bold" id="dinoModalLabel">Dino Dash</h5>
				 		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div className="modal-body">
						<div id="dinoCarousel" className="carousel slide">
							<ol className="carousel-indicators">
								<li data-target="#dinoCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#dinoCarousel" data-slide-to="1"></li>
								<li data-target="#dinoCarousel" data-slide-to="2"></li>
							</ol>
							<div className="carousel-inner">
							  	<div className="carousel-item active">
									<img className="d-block w-100" src="assets/img/projects/DinoDash1.png" alt="First slide">
							 	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/DinoDash2.png" alt="Second slide">
							  	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/DinoDash3.png" alt="Third slide">
								</div>
							</div>
							<a className="carousel-control-prev" href="#dinoCarousel" role="button" data-slide="prev">
							  	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#dinoCarousel" role="button" data-slide="next">
							  	<span className="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Next</span>
							</a>
						</div>
						<hr>
						<p className="modal-text">
							Dino Dash is single page application featuring an infinitely side-scrolling video game developed in JavaScript using the Phaser framework. 
							The backend API was built using Ruby on Rails, which allows users and their high scores to be saved.
							The top ten scores are also displayed next to the game window.
							The objective of the game is to control the dinosaur to avoid incoming bombs for as long as possible. Extra points can be earned by collecting food.
						</p>
					</div>
					<div className="modal-footer">
						<a className="btn btn-primary btn-link-1" href="https://github.com/mshin1995/DinoDash" target="_blank"><i className="fab fa-github"></i></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>

		<div className="modal fade" id="petModal" tabindex="-1" role="dialog" aria-labelledby="petModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div className="modal-content">
					<div className="modal-header">
				  		<h5 className="modal-title bold" id="petModalLabel">PetMatchr</h5>
				 		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div className="modal-body">
						<div id="petCarousel" className="carousel slide">
							<ol className="carousel-indicators">
								<li data-target="#petCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#petCarousel" data-slide-to="1"></li>
								<li data-target="#petCarousel" data-slide-to="2"></li>
								<li data-target="#petCarousel" data-slide-to="3"></li>
								<li data-target="#petCarousel" data-slide-to="4"></li>
								<li data-target="#petCarousel" data-slide-to="5"></li>
							</ol>
							<div className="carousel-inner">
							  	<div className="carousel-item active">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr3.png" alt="First slide">
							 	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr4.png" alt="Second slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr2.png" alt="Third slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr5.png" alt="Fourth slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr6.png" alt="Fifth slide">
								</div>
								<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/PetMatchr7.png" alt="Sixth slide">
							  	</div>
							</div>
							<a className="carousel-control-prev" href="#petCarousel" role="button" data-slide="prev">
							  	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#petCarousel" role="button" data-slide="next">
							  	<span className="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Next</span>
							</a>
						</div>
						<hr>
						<p className="modal-text">
							PetMatchr is an application for pet owners and their pets to find their perfect match for a play date. 
							Based on the famous dating application, Tinder, PetMatchr was developed using Ruby on Rails with a MVC framework and with CRUD in mind.
							Users are able to create accounts with a picture and short bio. Once an account has been created, they can look through other users to either like or dislike one another.
							If two users both like each other, a match is made and they can start a conversation. Conversations can be started by using the included messaging feature.
							User validation and secure passwords were implmented using Bcrypt and session IDs.
							Bootstrap was used to style the overall look of the page.
						</p>
					</div>
					<div className="modal-footer">
						<a className="btn btn-primary btn-link-1" href="https://github.com/mshin1995/Pet_Match_App" target="_blank"><i className="fab fa-github"></i></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>

		<div className="modal fade" id="nbaModal" tabindex="-1" role="dialog" aria-labelledby="nbaModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div className="modal-content">
					<div className="modal-header">
				  		<h5 className="modal-title bold" id="nbaModalLabel">NBA Stat Tracker</h5>
				 		<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div className="modal-body">
						<div id="nbaCarousel" className="carousel slide">
							<ol className="carousel-indicators">
								<li data-target="#nbaCarousel" data-slide-to="0" className="active"></li>
								<li data-target="#nbaCarousel" data-slide-to="1"></li>
							</ol>
							<div className="carousel-inner">
							  	<div className="carousel-item active">
									<img className="d-block w-100" src="assets/img/projects/NBA1.png" alt="First slide">
							 	</div>
							 	<div className="carousel-item">
									<img className="d-block w-100" src="assets/img/projects/NBA.gif" alt="Second slide">
							  	</div>
							</div>
							<a className="carousel-control-prev" href="#nbaCarousel" role="button" data-slide="prev">
							  	<span className="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Previous</span>
							</a>
							<a className="carousel-control-next" href="#nbaCarousel" role="button" data-slide="next">
							  	<span className="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span className="sr-only">Next</span>
							</a>
						</div>
						<hr>
						<p className="modal-text">
							NBA Stat Tracker is a CLI application that enables users to stay up-to-date on their favorite NBA player’s stats (individual and team).
							It was developed using Ruby on Rails and implements basic CRUD functionality and user authentication.
							Users who create an account are able to search and save current NBA players that they want to track throughout the season.
							They have the ability to add or delete players from their tracked list at any time.
							Players and their stats can also be viewed without creating an account for users who just want a quick rundown.
							The data on NBA players and teams is pulled from the balldontlie API.
						</p>
					</div>
					<div className="modal-footer">
						<a className="btn btn-primary btn-link-1" href="https://github.com/njenga-kariuki/NBA-Stat-Tracker-CLI-Program-FS-Mod-1-Project" target="_blank"><i className="fab fa-github"></i></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>
    );
};

export default Modal