
import { Spinner } from "react-bootstrap";
import { useAxiosOnMount } from "../hooks/axiosHooks";
import SpinnerBasic from '../components/SpinnerBasic';
import ErrorPage from "../components/ErrorPage";

export default ()=>{

    const[products, loadingProducts, productError] = useAxiosOnMount(
        '/api/produc'
    );
   
    if(loadingProducts){
        return(
            <SpinnerBasic />
        );
    }

    if(productError){
        return <ErrorPage err={productError} />;
    }

    return(
        <>
        <h1>Amazon Home Page (SPA DEMO) </h1>
        {products.map((p)=> (
            <p>{p.name}</p>
        ))}
        </>
    );
};