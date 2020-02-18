import React from 'react';

const Projects = () => {
    return (
        <div class="project-container section-container">
    		<div class="container">
        		<div class="row">
            		<div class="col project section-description">
                		<h2>Projects</h2>
                		<div class="divider-1 wow fadeInUp"><span></span></div>
            		</div>
        		</div>
        		<div class="row">
            		<div class="col-md-4 project-box ">
                		<div class="project-box-image">
							<a href="#gameModal" data-toggle="modal">
								<img src="projects/GameUP1.png" alt="gameupimg" />
							</a>
                		</div>
                		<h3><a href="#gameModal" data-toggle="modal">Game-UP</a> <i class="fas fa-angle-right"></i></h3>
                		<p>An IMDB-like web application for video game enthusiasts to get information on any game and stay up to date with recent gaming news.</p>
            		</div>
            		<div class="col-md-4 project-box">
                		<div class="project-box-image">
							<a href="#dinoModal" data-toggle="modal">
                    			<img src="projects/DinoDash1.png" alt="dinoimg" />
							</a>
						</div>
                		<h3><a href="#dinoModal" data-toggle="modal">Dino Dash</a> <i class="fas fa-angle-right"></i></h3>
                		<p>An infinitely side-scrolling game based on the Google Chrome browser easter egg, "T-Rex Run!" </p>
            		</div>
            		<div class="col-md-4 project-box">
               			<div class="project-box-image">
							<a href="#petModal" data-toggle="modal">
                    			<img src="projects/PetMatchr1.png" alt="petimg" />
							</a>
						</div>
                		<h3><a href="#petModal" data-toggle="modal">PetMatchr</a> <i class="fas fa-angle-right"></i></h3>
                		<p>An application for pet owners to find the perfect play dates for their companions.</p>
            		</div>
				</div>
				<div class="row">
					<div class="col-md-4 project-box">
                		<div class="project-box-image">
							<a href="#nbaModal" data-toggle="modal">
                    			<img src="projects/NBA1.png" alt="nbaimg" />
							</a>
						</div>
                		<h3><a href="#nbaModal" data-toggle="modal">NBA Stat Tracker</a> <i class="fas fa-angle-right"></i></h3>
                		<p>A Command Line Interface (CLI) application to track the stats of your favorite NBA players.</p>
            		</div>
				</div>
    		</div>
		</div>
    );
};

export default Projects