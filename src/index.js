import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

//! Do we need to change this to pizza??????
const products = (state = [], action) => {
    // TODO: Save all products from the server
    //This is our product reducer
    if (action.type === 'SET_PRODUCT_LIST') {
        return action.payload;
    }
    return state;
};

//REDUCERS 

const customerName = (state = '', action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return Number(state) + Number(action.payload.price);
    }
    return state;
};

const streetAddress = (state = [], action) => {
    if (action.type === 'ADD_STREET_ADDRESS') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return [];
    }
    return state;
};

const city = (state = '', action) => {
    if (action.type === 'ADD_CITY') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
};

const zipCode = (state = '', action) => {
    if (action.type === 'SET_ZIP_CODE') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return ''
    }
    return state;
};

const checkoutTotal = (state = 0, action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return Number(state) + Number(action.payload.price);
    }
    return state;
}

const cart = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return [...state, action.payload.name]
    } else if (action.type === 'EMPTY_CART') {
        return [];
    } else if (action.type === 'UPDATE_CART') {
        return action.payload;
    }
    return state;
}

const type = (state = '', action) => {
    if (action.type === 'SET_PICKUP') {
        return action.payload;
    } else if (action.type === 'SET_DELIVERY') {
        return action.payload;
    } else if (action.type === 'CLEAR_FORM') {
        return '';
    }
    return state;
}


// STORE 

const storeInstance = createStore(
    combineReducers(
        {
            //PUT REDUCERS HERE
            products,
            customerName,
            streetAddress,
            city,
            zipCode,
            checkoutTotal,
            type,
        }
    ),
    applyMiddleware(logger)
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
