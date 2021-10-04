import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Service from '../Service/Service';
import "./Home.css";

const Home = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    useEffect(()=>{
        fetch('./fakedb.JSON')
        .then(res => res.json())
        .then(data => setCourses(data));
    }, []);
    const handleSeeMore = () => {
        history.push('/courses');
    }
    return (
        <div>
            {/* Hero Section */}
            <div className="hero__section container">
                <h1>We help you to learn what you need</h1>
                <p>Bring training to your people, no matter where their work takes them. Build micro-learning courses in minutes.</p>
                <button className="btn btn__style">Take A Tour</button>
            </div>
            {/* Show Courses */}
            <div>
                <div className="row row-cols-1 row-cols-md-4 g-5 p-5 container mx-auto">    
                    {
                        courses.map(course => <Service key={course.key} course={course}></Service>)
                    }
                    <button className="btn btn__style mx-auto" onClick={handleSeeMore}>See More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;