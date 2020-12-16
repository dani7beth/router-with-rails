import { CardGroup } from "react-bootstrap";
import ErrorPage from "../components/ErrorPage";
import SpinnerBasic from "../components/SpinnerBasic";
import Product from "./Product";

export default ({products, loading, error}) =>{

    if(loading){
        return <SpinnerBasic /> ;
    }

    if(error){
        return <ErrorPage err={error} />;
    }

    return(
        <>
            {products.map((p)=> (
            <Product key={p.id} {...p} />
        ))}
        </>
    );
};