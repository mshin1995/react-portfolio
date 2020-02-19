import React from 'react';

const Contact = () => {
    return (
        <footer id="contact">
	        <div className="container footer-container">
	        	<div className="row">
                    <div className="col-md-5 footer-left">
						<p>Email: <a href="mailto:mshin1995@gmail.com" target="_blank">mshin1995@gmail.com</a></p>
                    </div>
                    
                    <div className="col-md-6 offset-md-1 footer-right">
                    	<a href="https://www.linkedin.com/in/mshin1995" target="_blank"><i className="fab fa-linkedin-in"></i></a>
						<a href="https://www.github.com/mshin1995" target="_blank"><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="row">
                	<div className="col footer-bottom">
		           		<a className="scroll-link" href="#top-content"><i className="fas fa-chevron-up"></i></a>
		           	</div>
                </div>
	        </div>
        </footer>
    )
};

export default Contact