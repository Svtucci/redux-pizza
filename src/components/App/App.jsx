import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import CheckOutForm from '../CheckOutForm/CheckOutForm.jsx';
import CustomerInfo from '../CustomerInfo/CustomerInfo.jsx';
import Header from '../Header/Header.jsx';
import PizzaItems from '../PizzaItems/PizzaItems.jsx';
import PizzaList from '../PizzaList/PizzaList.jsx';
import AdminPage from '../AdminPage/AdminPage.jsx'



function App() {

  //TODO does header need an exact path???
  return (
    <div>
      <Router>
        <Route exact path="/header" className='App-header'>
          <h1 Name='App' className='App-title'>Prime Pizza</h1>
          <Link to="/CheckOutForm">Checkout</Link>
          <Link to="/CustomerInfo">CustomerInfo</Link>
          <Link to="/PizzaList">Pizza List </Link>
        </Route>

        <Route exact path="/">
          <PizzaList />
        </Route>

        <Route exact path="/CustomerInfo">
          <CustomerInfo />
        </Route>

        <Route exact path="/CheckOutForm">
          <CheckOutForm />
        </Route>

        <Route exact path="/AdminPage">
          <CheckOutForm />
        </Route>

        {/* <img src='images/pizza_photo.png' /> */}
        <p>Pizza is great.</p>
      </Router>
    </div>
  );
}

export default App;
