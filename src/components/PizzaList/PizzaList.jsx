import React from 'react';
import { useHashRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './PizzaList.css';
import PizzaItems from '../PizzaItems/PizzaItems';
import { useState, useEffect } from 'react';
import axios from 'axios';


function PizzaList() {
    // Should we use redux here, or useState 
    const dispatch = useDispatch();
    const history = useHistory();
    //might want to change this var name 
    const [pizzaMenu, setPizzaMenu] = useState([]); 


    //history.push
    const nextPage = (event) => {
        event.preventDefault();
        //if (arrayNameHere.length > 0) 
        {
            history.push('/CustomerInfo');
        }
    }
    //TODO Conditional rendering for Add/Delete button
    // dispatch


    //!GET request
    const fetchPizzaMenu = () => {
            axios.get('/api/pizza').then((response) => {
                setPizzaMenu(response.data); 
            }).catch(error => {
            console.log('Error in fetch in pizzaItems', error);
            alert('Something went wrong');
        });
    }

    useEffect(() => {
        fetchPizzaMenu();
    }, []); 

    //! POST request


    //! What will display on the DOM
    //TODO need to pass PizzaItems
    return (
        <>
        <div>
            <ul>
                {pizzaMenu.map((pizza, i) => {
                    return <PizzaItems key={i} pizza={pizza} />;
                })}
            </ul>
        </div>
        <br />
            <button onClick={nextPage}>Next</button>

        </>

    ) // End return
} // End PizzaList ()


export default PizzaList;
