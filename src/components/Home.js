import React from 'react';

const Home = () => {
    return (
        <div className="top-content" id="top-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 text">
                        <h1>MATTHEW SHIN</h1>
                        <div className="description">
                            <p>Software Developer | Seattle, WA</p>
                        </div>
                        <div className="top-big-link">
                            <a className="btn btn-primary btn-link-1" href="resume/Resume.pdf" target="_blank"><i className="far fa-file-alt"></i> Resume</a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

export default Home