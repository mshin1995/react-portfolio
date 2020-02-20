import React from 'react';

const Dinodash = () => {
    return (
        <div class="modal fade" id="dinoModal" tabindex="-1" role="dialog" aria-labelledby="dinoModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div class="modal-content">
					<div class="modal-header">
				  		<h5 class="modal-title bold" id="dinoModalLabel">Dino Dash</h5>
				 		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div class="modal-body">
						<div id="dinoCarousel" class="carousel slide">
							<ol class="carousel-indicators">
								<li data-target="#dinoCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#dinoCarousel" data-slide-to="1"></li>
								<li data-target="#dinoCarousel" data-slide-to="2"></li>
							</ol>
							<div class="carousel-inner">
							  	<div class="carousel-item active">
									<img class="d-block w-100" src="assets/img/projects/DinoDash1.png" alt="First slide" />
							 	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/DinoDash2.png" alt="Second slide" />
							  	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/DinoDash3.png" alt="Third slide" />
								</div>
							</div>
							<a class="carousel-control-prev" href="#dinoCarousel" role="button" data-slide="prev">
							  	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#dinoCarousel" role="button" data-slide="next">
							  	<span class="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Next</span>
							</a>
						</div>
						<hr />
						<p class="modal-text">
							Dino Dash is single page application featuring an infinitely side-scrolling video game developed in JavaScript using the Phaser framework. 
							The backend API was built using Ruby on Rails, which allows users and their high scores to be saved.
							The top ten scores are also displayed next to the game window.
							The objective of the game is to control the dinosaur to avoid incoming bombs for as long as possible. Extra points can be earned by collecting food.
						</p>
					</div>
					<div class="modal-footer">
						<a class="btn btn-primary btn-link-1" href="https://github.com/mshin1995/DinoDash" target="_blank"><i class="fab fa-github"></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>
    );
};

export default Dinodash