import React from 'react';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        // Top Section
        <div className="container">
            <div className="top__section">
                <h3>We share knowledge with <br /> the world</h3>
                <img src="https://static-exp1.licdn.com/sc/h/d58zfe6h3ycgq5l1ccjpkrtdn" alt="" />
            </div>
        {/* Middle Section */}
            <div className="middle__section">
                <h2>Changing <span>learning</span> for the better</h2>
                <p>Whether you want to learn or to share what you know, you’ve come to the right place. As a <br /> global destination for online learning, we connect people through knowledge.</p>
            </div>
        {/* Bottom Section */}
            <div className="bottom__section">
                <div className="bottom__section__item rounded shadow">
                    <h3>Work with us</h3>
                    <p>At e-Learning, we’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.</p>
                </div>
                <div className="bottom__section__item rounded shadow highlighted__item">
                    <h3>See our research</h3>
                    <p>We’re committed to changing the future of learning for the better. Dig into our original research to learn about the forces that are shaping the modern workplace.</p>
                </div>
                <div className="bottom__section__item rounded shadow">
                    <h3>Read our blog</h3>
                    <p>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;