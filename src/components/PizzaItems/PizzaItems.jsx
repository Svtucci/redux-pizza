import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'; 
//TODO import mui 


function PizzaItems({ pizza }) {
    const dispatch = useDispatch();
    const cart = useSelector(store => store.cart);

    const addPizzaToCart = () => {
        console.log(product);
    }
    //! DELETE request
    // handle add
    // handle remove


    //!What will display on the DOM
    return (
        <>
            
            <Card
            sx={{
                display: 'block',
            justifyContent: 'center',
            border: 2,
            margin: 2,
            boxShadow: 10,}}>
                <h3>{pizza.name}:</h3> {''}
                <br />
                <img src={pizza.image_path} />
                <br />
                {pizza.price}
                <br />
                <Button onClick={addPizzaToCart}>Add To Cart</Button>

            </Card>

        </>

    );// End return
} // end PizzaItems ()


export default PizzaItems;