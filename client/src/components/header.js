import React, { useState } from 'react';
import { Link,withRouter } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,

} from 'reactstrap';


const Header = (props) => {
 
  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
   
  const setHeader=()=>{
 
      return(



        <Navbar color="#f8f9fa" style={{background:"#f8f9fa"}} light expand="md">
        <Link to="/">
        <NavbarBrand className='font-weight-bold' style={{cursor:"pointer"}}> Ice-Cream-Shop</NavbarBrand>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <React.Fragment>
            <NavItem>
              <Link to="/">
              <NavLink style={{cursor:"pointer"}} >Home</NavLink>
              </Link> 
            </NavItem>
            <NavItem>
              <Link to="/order">
              <NavLink style={{cursor:"pointer"}} >Order</NavLink>
              </Link> 
            </NavItem>
       
   

            </React.Fragment>
            
           </Nav>
      
        </Collapse>
      </Navbar>
     


      )
    }

  
  

    return (
        <div>
       {setHeader()}
      </div>
    );
  
}

export default withRouter(Header);




