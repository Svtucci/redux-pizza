import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//TODO import mui 


function PizzaItems() {
const dispatch = useDispatch ();


useEffect(() => {
    fetchProducts ();
}, []);
    //! Conditional rendering for Add/Delete button
    // dispatch
   
    const fetchProducts = () => {
        axios.get('/api/pizza').then(response => {
            const action ={ type: 'SET_PRODUCT_LIST', payload:
            response.data };
            dispatch(action);
        }).catch(error => {
            console.log('Error in fetch in pizzaItems', error);
            alert('Something went wrong');
        });
    }
    //! DELETE request
    // handle add
    // handle remove

    // ! GET request



    //!What will display on the DOM
    //TODO need to pass through 
    return (
        <>
        <h2>Pizza Items</h2>
            <li>




            </li>

        </>

    )// End return
} // end PizzaItems ()


export default PizzaItems;