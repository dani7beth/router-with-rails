import Axios from 'axios';
import { useEffect, useState } from 'react';
import {Button, ButtonGroup, Card, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () =>{
    const [products, setProducts] = useState([]);
    let dummyProduct = {
        name: "test", 
        department: "tools", 
        description: "thingthang", 
        price: 10.01
    };
    let updatedProduct = {
        name: "test-updated", 
        department: "tools!", 
        description: "thingthang!", 
        price: 10.01
    };

    const readProducts = async()=>{
        try{
            let res = await Axios.get('/api/products')
            setProducts(res.data);
        }catch(err){
            console.log(err);
        }
    }
    const readProduct = async(id) =>{
        try{
            let res = await Axios.get(`/api/products/${id}`);
            console.log(res);

        }catch(err){
            console.log(err);
            
        }
    }
    const createProduct = async(product)=>{
        try{
            

            let res = await Axios.post(`/api/products`, product);
            console.log(res);
            setProducts([res.data, ...products]);

        }catch(err){
            console.log(err);
            
        }
    }
    const updateProduct = async(id, product)=>{
        try{
            let res = await Axios.put(`/api/products/${id}`, product);
            console.log(res);
            let newProducts = products.map((p)=> (p.id !== id ? p : res.data));
            setProducts(newProducts);

        }catch(err){
            console.log(err);
            
        }
    }
    const deleteProduct = async(id)=>{
        try{
            let res = await Axios.delete(`/api/products/${id}`);
            console.log(res);
            let newProducts = products.filter((p)=> p.id !== res.data.id);
            setProducts(newProducts);

        }catch(err){
            console.log(err);
            
        }
    }

    const renderProducts = () =>{
        return(
            <>
            {/* <Link to={`/products/${p.id}`}></Link> */}
                {products.map((p)=>{
                return(
                    <>
                <Card 
                bg="light" 
                style={{ width: '18rem' }} 
                key={p.id}>
                    <Card.Title>{p.name}</Card.Title>
                    <Card.Subtitle>{p.department}</Card.Subtitle>
                    <Card.Text>{p.description}</Card.Text>
                    <Card.Text>${p.price}</Card.Text>
                </Card>
                <br />
                </>
                )
            })};
            </>
        )
    }

    useEffect(()=>{
        readProducts();
    }, [])

    return(
        <>
        <h1>Products</h1>
        {/* <ButtonGroup style={{margin: "1%"}}>
            <Button onClick={readProducts}>read products</Button>
            <Button onClick={()=>readProduct(3)}>read product</Button>
            <Button onClick={()=>createProduct(dummyProduct)}>create</Button>
            <Button onClick={()=>updateProduct(3, updatedProduct)}>update</Button>
            <Button onClick={()=>deleteProduct(4)}>delete</Button>
        </ButtonGroup> */}
        {renderProducts()}
        </>
    )
}