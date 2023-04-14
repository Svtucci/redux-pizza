import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'; 
import axios from 'axios'; 

function AdminPage({ }) {
    const dispatch = useDispatch();
    const history = useHistory(); 

    // TO BE CHANGED. FRAMEWORK CODE. NAMES TO BE CHANGED

    // const customerName = useSelector(store => store.customerName)
    // const time = useSelector(store => store.time)
    // const orderType = useSelector(store => store.orderType)
    
    // NAMES TO BE CHANGED 
    // const sendToServer = () => {
    //     axios.post('/pizza', {
    //         customerName: customerName,
    //         time: time, 
    //         orderType: orderType, 
    //         price: price, 
    //     }).then(response) => {
    //         dispatch({type: 'CLEAR_FORM'}); 
    //         history.push('activity-list');
    //     }).catch(error => {})
    // }



    return (

        <>
        <h3>ADMIN PAGE</h3>

        </>

    ) // End return

} // End AdminPage

export default AdminPage;




//! What will display on the DOM 
    //TODO need to display the order and customer info 
    

    //For Steve, 
    //const dispatch
    // const "pizzas" useSelector

    // //useEffect(() => {
    //     fetchpizzalist??();
    // }, [])

    // const fetchpizzalist = () => {
    //     axios.get('/////').then(response => {
    //         dispatchEvent({ type: 'SET_PIZZA_LIST???', payload: response.data})
    //     }).catch(error => {
    //         alert('Something went wrong.')
    //     })
    // }