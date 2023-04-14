import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CheckOutForm({fetchProducts}) {




let [productToAdd, setProductToAdd] = useState({ name: '', price: 0 });

const handlePriceChange = (event) => {
    setProductToAdd({...productToAdd, price: event.target.value,});
}

const handleNameChange = (event) => {}
    //! Submit function, PUT info onto server
    // axios.post
    // history.push

    //! DELETE request to remove items from cart

    //! What will display on the DOM


    return (
        <>


            {/* Add submit/checkout button linked to POST request */}


        </>
    ) // End return

} // End CheckOutForm

export default CheckOutForm;