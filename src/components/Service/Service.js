import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import "./Service.css";

const Service = (props) => {
    const {name, instructor, img, details, rating, enrolled, price} = props.course;
    return (
        <div>
            <div>
                {/* Courses part */}
            <CardGroup className="card-group">
                <Card className="card">
                    <Card.Img className="img-size" variant="top" src={img} />
                    <Card.Body className="body-color">
                        <Card.Title>{name}</Card.Title>
                        <p>created by: <b><u>{instructor}</u></b></p>
                        <Card.Text>
                            {details}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-center">
                        <h4> ${price}</h4>
                        <span className="mx-2 fs-5">Rating:</span>
                        <Rating
                            initialRating={rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                            readonly></Rating>
                        <h6 className="mt-3"><i className="fas fa-users"></i> Enrolled: {enrolled}</h6>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
        </div>
    );
};

export default Service;