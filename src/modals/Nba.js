import React from 'react';

const Nba = () => {
    return (
        <div class="modal fade" id="nbaModal" tabindex="-1" role="dialog" aria-labelledby="nbaModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div class="modal-content">
					<div class="modal-header">
				  		<h5 class="modal-title bold" id="nbaModalLabel">NBA Stat Tracker</h5>
				 		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div class="modal-body">
						<div id="nbaCarousel" class="carousel slide">
							<ol class="carousel-indicators">
								<li data-target="#nbaCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#nbaCarousel" data-slide-to="1"></li>
							</ol>
							<div class="carousel-inner">
							  	<div class="carousel-item active">
									<img class="d-block w-100" src="projects/NBA1.png" alt="First slide" />
							 	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="projects/NBA.gif" alt="Second slide" />
							  	</div>
							</div>
							<a class="carousel-control-prev" href="#nbaCarousel" role="button" data-slide="prev">
							  	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#nbaCarousel" role="button" data-slide="next">
							  	<span class="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Next</span>
							</a>
						</div>
						<hr />
						<p class="modal-text">
							NBA Stat Tracker is a CLI application that enables users to stay up-to-date on their favorite NBA player’s stats (individual and team).
							It was developed using Ruby on Rails and implements basic CRUD functionality and user authentication.
							Users who create an account are able to search and save current NBA players that they want to track throughout the season.
							They have the ability to add or delete players from their tracked list at any time.
							Players and their stats can also be viewed without creating an account for users who just want a quick rundown.
							The data on NBA players and teams is pulled from the balldontlie API.
						</p>
					</div>
					<div class="modal-footer">
						<a class="btn btn-primary btn-link-1" href="https://github.com/njenga-kariuki/NBA-Stat-Tracker-CLI-Program-FS-Mod-1-Project" target="_blank"><i class="fab fa-github"></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>
    );
};

export default Nba