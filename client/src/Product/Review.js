import { Card, ListGroupItem, ListGroup } from "react-bootstrap"
import ErrorPage from "../components/ErrorPage";
import SpinnerBasic from "../components/SpinnerBasic";
import { useAxiosOnMount } from "../hooks/axiosHooks"

export default ({productId}) =>{
    const [reviews, loading, error] =
    useAxiosOnMount(`/api/products/${productId}/reviews`);

    const renderBody = () =>{
        if(loading){
            return <SpinnerBasic />;
        }
        if(error){
           return <ErrorPage err={error} />;
        }
        return reviews.map((r)=> <Card.Text>{r.text}</Card.Text>);
        
    }
    
    return(
        <ListGroup className="list-group-flush"> 
            <ListGroupItem>Reviews</ListGroupItem>
            {renderBody()}
        </ListGroup>
    )
}