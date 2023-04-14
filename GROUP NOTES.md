<h1>PIZZA PARLOR NOTES</h1>

```
CD PRIME/TANZNAITE CMD PROMPT EXAMPLE
```
- Server side code for baseline has already been provided. 
- npm install has been ran 

<h2>Planning Steps</h2>

[x] ALL MEMBERS CREATE SQL DATABASE `pizza_parlor`
    - SQL code is provided in file already 

 


<h3> Components </h3>

1. App page- App
2. Select Pizza - PizzaList (direct route)
3. Pizza Items- PizzaItem
4. Enter Customer Information - CustomerInfo (direct route)
5. Checkout Form - CheckoutForm (direct route)
6. Admin Page - AdminPage (direct route)
7. Header component - Header, will have total cost  (direct route)




<h4><u> App </u></h4> -Steve

1. Will feature all components
2. Order total $
3. Don't forget imports (axios, redux, paths,
 HashRouter, React, UseEffect, useDispatch, useSelector)


<h4><u> PizzaList </u></h4> -Julie

1. Pizza item? (or in own component)?
2. Next button leading to CustomerInfo
3. Update order total when adding item
4. GET request
5. POST request
6. return PizzaItem
7. Add MUI

<h4><u> PizzaItems </u></h4> -Leigh

1. PULL request from database
2. Toggle conditional for Add/Remove buttons 
3. DELETE request?
4. MUI

<h4><u> CustomerInfo </u></h4> -Steve

1. Form to input customer info, including:
    - *name*
    - *street address*
    - *city*
    - *zip*
    - *carry out OR delivery*
2. Total cost of order will display at top
3. Next button leading to CheckoutForm



<h4><u> CheckoutForm </u></h4> -GROUP WORK

1. When "Checkout" button is clicked, Name, street Address, City, and Zipcode, and Carryout OR Delivery should be sent to the server
2. After the checkout is complete, navigate the user back to the **select pizza** page AND clear out the reducers as appropriate
3. Reset the cart, customer info etc
4. Submit form event with onChange for each input


<h4><u> AdminPage </u></h4> -Steve

1. This page should NOT appear in the nav bar
2. Should be availabe on [http://localhost:3000/admin]
3. Display Name, Time, order type (pickup/delivery), and total cost


<h4>REDUX</h4>

1. Setup Redux in index.js file
    - IMPORT REDUX
    - ADD REDUCERS
    - CREATE STORE
    - SETUP LOGGER
2. CREATE DISPATCHES IN COMPONENTS 
3. CREATE useSelectors in components 

