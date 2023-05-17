import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

// Things to import:
// useEffect, useNavigate, useParams, axios

const Details = () => {
    // Product Info
    const [product, setProduct] = useState("");

    // ID Parameter
    const {id} = useParams();

    // Navigate Variable
    const navigate = useNavigate();

    // Home button function
    const homeButton = (e) => {
        // Prevent page from reloading
        e.preventDefault();

        // Navigate back to home page
        navigate('/');
    }

    // Get Product Info
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            // Log data
            console.log("Details page success.", res)
            // Set product data into variable
            setProduct(res.data.results)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Details page error.", err)
        })
    }, [id])

    return (
        <div>
            <h1>Product Details</h1>

            {/* Product Info */}
            <div id='product-details'>
                <h2>{product.title}</h2>
                <p>${product.price}</p>
                <p>{product.description}</p>
            </div>

            {/* Home Button */}
            <button onClick={homeButton} className='form-submit'>Home</button>
        </div>
    )
}

export default Details