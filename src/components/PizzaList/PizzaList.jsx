import React from 'react';
import { useHashRouter as Router, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './PizzaList.css';
import PizzaItems from '../PizzaItems/PizzaItems';


function PizzaList() {

    const dispatch = useDispatch();

    const history = useHistory();
    //might want to change this var name 
    const pizzaList = useSelector(store => store.pizzaList);


    //history.push
    const nextPage = (event) => {
        event.preventDefault();
        //if (activityType.length > 0) {
            history.push('/CustomerInfo');
        } else {
            alert('Please add an activity type.');
        }
    }


    //! GET request



    //! POST request



    //! What will display on the DOM
    //TODO need to pass PizzaItems
    return (
        <>

            <PizzaItems />

        <button onClick= {nextPage} > Next </button>
        </>
    ) // End return
} // End PizzaList ()
export default PizzaList;