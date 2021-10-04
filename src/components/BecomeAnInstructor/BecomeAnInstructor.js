import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./BecomeAnInstructor.css";

const BecomeAnInstructor = () => {
    return (
        <div>
            {/* Come and tech part */}
            <div className="come__tech">
                <div>
                    <h1>Come teach <br /> with us</h1>
                    <p>Become an instructor and change <br /> lives — including your own</p>
                    <button className="btn btn__style">Join With Us</button>
                </div>
                <div>
                    <img src="https://d1ac9zce9817ms.cloudfront.net/images/19%20%20-%20How%20to%20Get%20Online%20Teaching%20Jobs%20in%20Canada_blog-1616141893748.jpg" alt="" />
                </div>
            </div>

            {/* Why start with us part */}
                <h1 className="text-center my-5">So many reasons to start</h1>
            <CardGroup className="container text-center">
                <Card>
                    <Card.Img variant="top" src="https://dta0yqvfnusiq.cloudfront.net/jlbmedia/2020/04/online-video-5e99f3ae1461e.jpg" />
                    <Card.Body>
                    <Card.Title>Teach your way</Card.Title>
                    <Card.Text>
                    Publish the course you want, in the way you want, and always have of control your own content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://www.taurusgroup.org/uploads/1588242433.jpg" />
                    <Card.Body>
                    <Card.Title>Inspire learners</Card.Title>
                    <Card.Text>
                    Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://surveys.google.com/google-opinion-rewards/imgs/gor_characters-20.png" />
                    <Card.Body>
                    <Card.Title>Get rewarded</Card.Title>
                    <Card.Text>
                    Expand your professional network, build your expertise, and earn money on each paid enrollment.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            
            {/* How to begin part */}
            <h1 className="text-center my-5">How to begin</h1>
            <CardGroup className="container text-center">
                <Card>
                    <Card.Img variant="top" src="https://www.livehappy.com/sites/default/files/styles/article_featured/public/main/articles/Goals-Experiment-orig.jpg?itok=yqFgc7Yx" />
                    <Card.Body>
                    <Card.Title>Plan Your Curriculum</Card.Title>
                    <Card.Text>
                    You start with your passion and knowledge. Then choose a promising topic with the help of our Marketplace Insights tool. <br /> The way that you teach — what you bring to it — is up to you.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://ogymogy.com/img/Screen-Recording-Windows.png" />
                    <Card.Body>
                    <Card.Title>Record Your Video</Card.Title>
                    <Card.Text>
                    Use basic tools like a smartphone or a DSLR camera. Add a good microphone and you’re ready to start. <br /> If you don’t like being on camera, just capture your screen. Either way, we recommend two hours or more of video for a paid course.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://elearningindustry.com/wp-content/uploads/2015/02/launching-your-elearning-course-15-things-to-double-check.jpg" />
                    <Card.Body>
                    <Card.Title>Launch Your Course</Card.Title>
                    <Card.Text>
                    Gather your first ratings and reviews by promoting your course through social media and your professional networks. <br /> Your course will be discoverable in our marketplace where you earn revenue from each paid enrollment.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardGroup>
            {/* Become An Instructor Part */}

            <div className="instructor">
                <h2>Become an instructor today</h2>
                <h5>Join one of the world’s largest online learning marketplaces.</h5>
                <button className="btn btn__style">Join Now</button>
            </div>
        </div>
    );
};

export default BecomeAnInstructor;