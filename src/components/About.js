import React from 'react';

const About = () => {
    return ( 
        <div className="about-container section-container section-container-gray-bg" id="about">
    		<div className="container">
        		<div className="row">
            		<div className="col-12 col-lg-7 about-box wow fadeInLeft">
                		<div className="about-box-text">
							<h3>About Me</h3>
                    		<p className="medium-paragraph">
								I am a software developer based in Seattle, WA with a passion for creating and problem solving. 
								After graduating from the University of Washington with a degree in drawing and painting, 
								I wanted to pursue a career in software development due to my interest in modern technology and the way it allows me to apply my knowledge of art/design when creating applications.
								Coming from an extensive art background, I strive towards making projects that are not only functional, 
								but visually appealing and user-friendly as well.
							</p>
                    		<p>
								When I am not working I love to play video games, watch sports, and make art.
                    		</p>
                    		<p>
								I am currently seeking a full-time software development position in the Seattle area. 
                    		</p>
                		</div>
            		</div>
            		<div className="col-12 col-lg-5 about-box">
                		<div className="about-box-img">
                    		<img src="about/1.jpeg" alt="about" />
                		</div>
            		</div>
        		</div>
    		</div>
		</div>
    );
};

export default About