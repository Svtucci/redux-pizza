import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Radio, RadioGroup, FormControlLabel, Button } from '@mui/material';



function CustomerInfo() {
    const history = useHistory();
    const dispatch = useDispatch();


    const name = useSelector(store => store.name);
    const address = useSelector(store => store.address);
    const city = useSelector(store => store.city);
    const zipCode = useSelector(store => store.zipCode);
    const street = useSelector(store => store.street);
    const delivery = useSelector(store => store.delivery);
    const pickup = useSelector(store => store.pickup);

    const nextPage = (event) => {
        event.preventDefault();
        {
            history.push('/CheckOutForm');
        }
    }


    const addCustomer = (event) => {
        event.preventDefault();
        history.push('/CheckOutForm');
    };

    const nameChange = (event) => {
        const action = { type: 'SET_CUSTOMER_NAME', payload: event.target.value }

        const addressChange = (event) => {
            const action = { type: 'ADD_STREET_ADDRESS', payload: event.target.value }
        };

        const addCity = (event) => {
            const action = { type: 'ADD_CITY', payload: event.target.value }
        };

        const addZipCode = (event) => {
            const action = { type: 'SET_ZIP_CODE', payload: event.target.value };
            dispatch(action);
        };

        const setPickup = (event) => {
            const action = { type: 'SET_PICKUP', payload: event.target.value };
            dispatch(action);
        };

        const setDelivery = (event) => {
            const action = { type: 'SET_DELIVERY', payload: event.target.value };
            dispatch(action);
        }

        const previousPage = () => {
            history.push('/select')
        }

    }
    return (
        <>
            <h3>Customer Information</h3>
            <form onSubmit={addCustomer}>

            <TextField
                    id="name"
                    label="Name"
                    value={name}
                    type="text"
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="street"
                    label="Street Address"
                    value={street}
                    type="text"
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="city"
                    label="City"
                    value={city}
                    type="text"
                   
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="zip"
                    label="Zipcode"
                    value={zipCode}
                    type="number"
                  
                    fullWidth
                    margin="normal"
                />

                <RadioGroup aria-label="delivery" name="delivery" value={delivery} >
                    <FormControlLabel value="true" control={<Radio />} label="Delivery" />
                </RadioGroup>

                <RadioGroup aria-label="pickup" name="pickup" value={pickup} >
                    <FormControlLabel value="true" control={<Radio />} label="Pickup" />
                </RadioGroup>

            </form>

            <Button variant="contained" >Previous</Button>
            <Button variant="contained" >Next</Button>
        </>
    )
                // <label htmlFor="name">Name:</label><br />
                // <input id="name" value={name} type="text" />
                // <br />
                
                // <label htmlFor="street">Street Address:</label><br />
                // <input id="street" value={street} type="text" />
                // <br />
                // <label htmlFor="city">City:</label><br />
                // <input id="city" value={city} type="text" />
                // <br />
                // <label htmlFor="zip">Zipcode:</label><br />
                // <input id="zip" value={zipCode} type="number" />
                // <br />
                // <label htmlFor="delivery">Delivery:</label><br />
                // <input id="delivery" value={delivery} type="radio" />
                // <br />
                // <label htmlFor="pickup">Pickup:</label><br /> 
                // <input id="pickup" value={pickup} type="radio" />
                
                // <br />

            // </form>

        //     <RadioGroup aria-label="delivery" name="delivery" value={delivery} >
        //             <FormControlLabel value="true" control={<Radio />} label="Delivery" />
        //         </RadioGroup>

        //     <Button onClick={nextPage}>Next</Button>
        // </>
    
}

export default CustomerInfo;




