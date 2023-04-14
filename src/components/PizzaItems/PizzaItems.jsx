import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//TODO import mui 


function PizzaItems( {pizza}) {
const dispatch = useDispatch ();
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
        <h2>Pizza Items</h2>
            <li>
        {pizza.name}: {pizza.price}{''}
        {pizza.image_path}
        <button onClick={addPizzaToCart}> Add To Cart</button>


            </li>

        </>

    );// End return
} // end PizzaItems ()


export default PizzaItems;