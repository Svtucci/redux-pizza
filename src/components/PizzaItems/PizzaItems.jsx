import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
            
            <li>
                <h3>{pizza.name}:</h3> {''}
                <br />
                <img src={pizza.image_path} />
                <br />
                {pizza.price}
                
                <button onClick={addPizzaToCart}> Add To Cart</button>


            </li>

        </>

    );// End return
} // end PizzaItems ()


export default PizzaItems;