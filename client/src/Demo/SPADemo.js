import { useAxiosOnMount } from "../hooks/axiosHooks";
import SpinnerBasic from '../components/SpinnerBasic';
import ErrorPage from "../components/ErrorPage";
import Products from "../Product/Products";

export default ()=>{

    const[products, loadingProducts, productError] = useAxiosOnMount(
        '/api/products'
    );
   

    return(
        <>
        <h1>Amazon Home Page (SPA DEMO) </h1>
        <Products
        products={products} 
        loading={loadingProducts} 
        error={productError} />
        </>
    );
};