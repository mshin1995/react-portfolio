import React from 'react';

const Contact = () => {
    return (
        <footer>
	        <div class="container footer-container">
	        	<div class="row">
                    <div class="col-md-5 footer-left">
						<p>Email: <a href="mailto:mshin1995@gmail.com" target="_blank">mshin1995@gmail.com</a></p>
                    </div>
                    
                    <div class="col-md-6 offset-md-1 footer-right">
                    	<a href="https://www.linkedin.com/in/mshin1995" target="_blank"><i class="fab fa-linkedin-in"></i></a>
						<a href="https://www.github.com/mshin1995" target="_blank"><i class="fab fa-github"></i></a>
                    </div>
                </div>
                <div class="row">
                	<div class="col footer-bottom">
		           		<a class="scroll-link" href="#top-content"><i class="fas fa-chevron-up"></i></a>
		           	</div>
                </div>
	        </div>
        </footer>
    )
};

export default Contact