import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer__container">
            <h4>e-Learning</h4>
            <div>
                {/* Contract Part
                 */}
                <div>
                    <h5>Contract</h5>
                    <p><i className="fas fa-phone-alt"></i>  444.332.1167</p>
                    <p><i className="fas fa-map-marker-alt"></i>  7461 Old Harvard Rd. 
                    <br /> Middleburg, 
                    <br /> FL 32068</p>
                </div>
                {/* Social Media part */}
                <div>
                    <a href="https://www.facebook.com/" className="fa fa-facebook"> </a>
                    <a href="https://twitter.com/" className="fa fa-twitter"> </a>
                    <a href="https://www.youtube.com/" className="fa fa-youtube"> </a>
                    <a href="https://www.instagram.com/" className="fa fa-instagram"> </a>
                </div>
            </div>
            <p>Copyright &copy; 2021. <span>Md. Sakin Hossain</span></p>
        </div>
    );
};

export default Footer;