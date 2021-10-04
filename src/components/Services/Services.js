import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [courses, setCourses] = useState([]);
    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data => setCourses(data));
    },[])
    return (
        <div>
            <div className="text-center mt-4">
                <h2 className="fw-bold">Our Courses</h2>
                <h3>Always something new to <span className="highlighted__text">learn...</span></h3>
            </div>
            {/* Courses Part */}
            <div className="row row-cols-1 row-cols-md-4 g-4 p-5 container mx-auto">
                    {
                        courses.map(course => <Service
                            key={course.key}
                            course={course}
                        ></Service>)
                    }
                </div>
        </div>
    );
};

export default Services;