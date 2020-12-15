import { Link } from "react-router-dom"
import {Nav, Navbar} from 'react-bootstrap';

export default () =>{
    return(
         <Navbar expand="lg">
             <Navbar.Brand>React Router App</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id='basic-navbar-nav'>
                 <Nav className='mr-auto'>
                     <Nav.Link href='/'>Home</Nav.Link>
                     {/* <Nav.Link><Link to="/things">Things</Link></Nav.Link> */}
                     <Nav.Link href='/products'>Products</Nav.Link>
                 </Nav>
             
             </Navbar.Collapse>
             
         </Navbar>
             

         
    ) 
 }