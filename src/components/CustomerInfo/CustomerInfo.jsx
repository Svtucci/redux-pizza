
// 1. Form to input customer info, including:
//     - *name*
//     - *street address*
//     - *city*
//     - *zip*
//     - *carry out OR delivery*
// 2. Total cost of order will display at top (HEADER)
// 3. Next button leading to CheckoutForm
import { useSelector, useDispatch } from 'react-redux'; 
import { useHistory } from 'react-router-dom'; 


function CustomerInfo () {
    const history = useHistory();
    const dispatch = useDispatch(); 

const handleSubmit =(event) => {
    event.preventDefault();

    if ( 
        CustomerInfo.name&& 
        customerInfo.address &&
        customerInfo.city &&
        customerInfo.zip &&
        customerInfo.type
    ) {
        console.log("submitting customer, customer is:", customerInfo);
        dispatch({ type: "SET_CUSTOMER", payload: customerInfo });
        goToCheckout();
    } else {
        setIncompleteMessage(true);
        setTimeout(() => {
        setIncompleteMessage(false);
      }, 5000);
    }
  };

  const handleTypeChange = (event) => {
    setCustomerInfo({
      ...customerInfo,
      type: event.target.value,
    });
};




    
    const nextPage = () => {
        if(name.length > 0) {
            history.push('/CheckOutForm');
        } else {
            alert('Please add a person.'); 
        }
    }

    return(
        <>
        <h3>Customer Information</h3>
        <form onSubmit={addCustomer}>
            
            <label htmlFor="name">Name:</label><br />
            <input id="name" value={customerName} type="text" />
            
            <label htmlFor="street">Street Address:</label>
            <input id="street" value={street} type="text" />

            <label htmlFor="city">City:</label><br />
            <input id="city" value={city} type="text" />
            
            <label htmlFor="zip">Zipcode:</label>
            <input id="zip" value={zip} type="number" />
            
        </form>

        <button onClick={nextPage}>Next</button>
        </>
    )
}

export default CustomerInfo




