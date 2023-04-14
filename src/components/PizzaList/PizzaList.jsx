import React from 'react';
import { useHashRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PizzaList.css';
import PizzaItem from '../PizzaItem/PizzaItem';


function PizzaList() {

    const dispatch = useDispatch();

    const history = useHistory();
    //might want to change this var name 
    const pizzaList = useSelector(store => store.pizzaList);


    //history.push



    //! GET request



    //! POST request



    //! What will display on the DOM
    //TODO need to pass PizzaItems
    return (
        <>

            <PizzaItem />

        <button onClick= {nextPage} > Next </button>
        </>
    ) // End return
} // End PizzaList ()
export default PizzaList;