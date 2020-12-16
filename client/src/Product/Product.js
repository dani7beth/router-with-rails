import { useState } from "react";
import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Review from "./Review";

export default ({id, name, description, department, price}) =>{
    const [showReviews, setShowReviews] = useState(false);

    return(
        <>
        <Card style={{ width: '18rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{department}</Card.Text>
        <Card.Body>{description}</Card.Body>
        <Card.Subtitle>${price}</Card.Subtitle>
        <br />
        {showReviews && (
            <Review productId={id} />
        )}
        <Button variant="success" onClick={()=>setShowReviews(!showReviews)}>Reviews</Button>
        <Button variant="secondary">edit</Button>
        <Button variant="danger">delete</Button>
        </Card.Body>
        </Card>
        </>
    );

};