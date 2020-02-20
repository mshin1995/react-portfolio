import React from 'react';

const Gameup = () => {
    return (
        <div class="modal fade" id="gameModal" tabindex="-1" role="dialog" aria-labelledby="gameModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div class="modal-content">
					<div class="modal-header">
				  		<h5 class="modal-title bold" id="gameModalLabel">Game-UP</h5>
				 		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div class="modal-body">
						<div id="gameCarousel" class="carousel slide">
							<ol class="carousel-indicators">
								<li data-target="#gameCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#gameCarousel" data-slide-to="1"></li>
								<li data-target="#gameCarousel" data-slide-to="2"></li>
								<li data-target="#gameCarousel" data-slide-to="3"></li>
								<li data-target="#gameCarousel" data-slide-to="4"></li>
							</ol>
							<div class="carousel-inner">
							  	<div class="carousel-item active">
									<img class="d-block w-100" src="assets/img/projects/GameUP5.png" alt="First slide" />
							 	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/GameUP2.png" alt="Second slide" />
							  	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/GameUP3.png" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/GameUP4.png" alt="Fourth slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/GameUP.gif" alt="Fifth slide" />
							  	</div>
							</div>
							<a class="carousel-control-prev" href="#gameCarousel" role="button" data-slide="prev">
							  	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#gameCarousel" role="button" data-slide="next">
							  	<span class="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Next</span>
							</a>
						</div>
						<hr />
						<p class="modal-text">
							Game-UP is a web application for video game enthusiasts to get information on any game and stay up to date with recent gaming news. 
							The frontend was built using React and the backend was built using Ruby on Rails. 
							Any user is able to go on the website to search for video games by title. 
							Upon creating an account, they are able to make personalized lists of video games, such as "favorites" or "wants". 
							The application also implements Google OAuth for individual user verification. All of the video game data is pulled from the IGDB API.
							Semantic UI was used for some of the styling as well.
						</p>
					</div>
					<div class="modal-footer">
						<a class="btn btn-primary btn-link-1" href="https://github.com/mshin1995/game-up-frontend" target="_blank"><i class="fab fa-github"></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>
    );
};

export default Gameup