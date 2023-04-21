import { useSelector } from "react-redux";
import React from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Container from '@mui/material/Container'; 


function Header () {
    // function Header({ displayTotal, headerText }) {
    //     const total = useSelector((store) => store.total);
    
    //!What will display on the DOM
    //TODO need to display total cost
    return (

        <>
            <label>Its A Spicy A Pizza!!!!</label>
            <div>
                <Router>
                    <Container fixed>
                        <Route exact path="/header" className='App-header'>
                            <h1 Name='App' className='App-title'>Prime Pizza</h1>
                            <Link to="/CheckOutForm">Checkout</Link>
                            <Link to="/CustomerInfo">CustomerInfo</Link>
                            <Link to="/PizzaList">Pizza List </Link>
                        </Route>
                    </Container>
                </Router>
            </div>

        </>
    )
}

export default Header;

import AppBar  from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button"


// function Header (){

// return (

//     <>
//     <AppBar position="static">
//         <Toolbar>
//             <Typography 
//             variant="h6"
//             component="div"
//             sx={{flexGrow: 1 }}>
//                 Activity Log
//             </Typography>
//             <Button color="inherit">Add New</Button>
//             <Button color="inherit">View List</Button>
//         </Toolbar>
//     </AppBar>
   
    
    
//     </>


// )

// }
// export default Header;