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

    const handleNameChange = (event) => {
        const action = { type: 'SET_CUSTOMER_NAME', payload: event.target.value } 
        dispatch(action);

        const handleAddressChange= (event) => {
            const action = { type: 'ADD_STREET_ADDRESS', payload: event.target.value }
            dispatch(action);
        };

        const handleAddCity = (event) => {
            const action = { type: 'ADD_CITY', payload: event.target.value }
            dispatch(action);
        };

        const handleAddZipCode = (event) => {
            const action = { type: 'SET_ZIP_CODE', payload: event.target.value };
            dispatch(action);
        };

        const handleSetPickup = (event) => {
            const action = { type: 'SET_PICKUP', payload: event.target.value };
            dispatch(action);
        };

        const handleSetDelivery = (event) => {
            const action = { type: 'SET_DELIVERY', payload: event.target.value };
            dispatch(action);
        }

        const handlePreviousPage = () => {
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
                    onChange={handleNameChange}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    id="street"
                    label="Street Address"
                    value={street}
                    type="text"
                    onChange={handleAddressChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="city"
                    label="City"
                    value={city}
                    type="text"
                    onChange={handleCityChange}
                    fullWidth
                    margin="normal"
                />

                <TextField
                    id="zip"
                    label="Zipcode"
                    value={zipCode}
                    type="number"
                    onChange={handleZipCodeChange}
                    fullWidth
                    margin="normal"
                />

                <RadioGroup aria-label="delivery" name="delivery" value={delivery} onChange={handleDeliveryChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Delivery" />
                </RadioGroup>

                <RadioGroup aria-label="pickup" name="pickup" value={pickup} onChange={handlePickupChange}>
                    <FormControlLabel value="true" control={<Radio />} label="Pickup" />
                </RadioGroup>

            </form>

            <Button variant="contained" onClick={handlePreviousPage} >Previous</Button>
            <Button variant="contained" onClick={nextPage}>Next</Button>
        </>
    )
              
    
}

export default CustomerInfo;




