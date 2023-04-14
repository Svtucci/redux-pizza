import React from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function CheckOutForm({fetchProducts}) {




let [productToAdd, setProductToAdd] = useState({ name: '', price: 0 });

const handlePriceChange = (event) => {
    setProductToAdd({...productToAdd, price: event.target.value,});
}

const handleNameChange = (event) => { setProductToAdd({...productToAdd,name: event.target.value,});
}

const addProduct = (event) => {
    event.preventDefault ();
}

axios.post('/api/pizza', productToAdd).then(response =>{

}).catch(error =>{
    alert('Something went wrong in axios.post in Form')
    console.log(`error in addProduct POST ${error}`)
})
    //! Submit function, PUT info onto server
    // axios.post
    // history.push

    //! DELETE request to remove items from cart

    //! What will display on the DOM


    return (
        <>
 <form onSubmit={(event) => addProduct(event)}>
      <input
        onChange={handleNameChange}
        type='text'
        placeholder='name'
      />

      <input
        onChange={handlePriceChange}
        type='text'
        placeholder='price'
      />

      <button type='submit'>Submit</button>
    </form>
            {/* Add submit/checkout button linked to POST request */}

        </>
    ) // End return

} // End CheckOutForm

export default CheckOutForm;