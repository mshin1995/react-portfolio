import React from 'react';

const Petmatchr = () => {
    return (
        <div class="modal fade" id="petModal" tabindex="-1" role="dialog" aria-labelledby="petModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered modal-lg" role="document">
			  	<div class="modal-content">
					<div class="modal-header">
				  		<h5 class="modal-title bold" id="petModalLabel">PetMatchr</h5>
				 		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
				  		</button>
					</div>
					<div class="modal-body">
						<div id="petCarousel" class="carousel slide">
							<ol class="carousel-indicators">
								<li data-target="#petCarousel" data-slide-to="0" class="active"></li>
								<li data-target="#petCarousel" data-slide-to="1"></li>
								<li data-target="#petCarousel" data-slide-to="2"></li>
								<li data-target="#petCarousel" data-slide-to="3"></li>
								<li data-target="#petCarousel" data-slide-to="4"></li>
								<li data-target="#petCarousel" data-slide-to="5"></li>
							</ol>
							<div class="carousel-inner">
							  	<div class="carousel-item active">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr3.png" alt="First slide" />
							 	</div>
							 	<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr4.png" alt="Second slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr2.png" alt="Third slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr5.png" alt="Fourth slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr6.png" alt="Fifth slide" />
								</div>
								<div class="carousel-item">
									<img class="d-block w-100" src="assets/img/projects/PetMatchr7.png" alt="Sixth slide" />
							  	</div>
							</div>
							<a class="carousel-control-prev" href="#petCarousel" role="button" data-slide="prev">
							  	<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Previous</span>
							</a>
							<a class="carousel-control-next" href="#petCarousel" role="button" data-slide="next">
							  	<span class="carousel-control-next-icon" aria-hidden="true"></span>
							  	<span class="sr-only">Next</span>
							</a>
						</div>
						<hr />
						<p class="modal-text">
							PetMatchr is an application for pet owners and their pets to find their perfect match for a play date. 
							Based on the famous dating application, Tinder, PetMatchr was developed using Ruby on Rails with a MVC framework and with CRUD in mind.
							Users are able to create accounts with a picture and short bio. Once an account has been created, they can look through other users to either like or dislike one another.
							If two users both like each other, a match is made and they can start a conversation. Conversations can be started by using the included messaging feature.
							User validation and secure passwords were implmented using Bcrypt and session IDs.
							Bootstrap was used to style the overall look of the page.
						</p>
					</div>
					<div class="modal-footer">
						<a class="btn btn-primary btn-link-1" href="https://github.com/mshin1995/Pet_Match_App" target="_blank"><i class="fab fa-github"></i> Github</a>
					</div>
			  	</div>
			</div>
		</div>
    );
};

export default Petmatchr