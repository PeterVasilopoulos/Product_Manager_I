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

    // Edit button function
    const editButton = (e) => {
        e.preventDefault();
        navigate(`/${id}/edit`)
    }

    // Delete button function
    const deleteButton = (e) => {
        e.preventDefault();
        
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((res) => {
            // Log data
            console.log("Delete request.", res)
            // Navigate to home
            navigate('/');
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Delete request error.", err)
        })
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

            {/* Edit and Delete Buttons */}
            <div id='edit-delete'>
                <button id='edit' onClick={editButton}>Edit</button>
                <button id='delete' onClick={deleteButton}>Delete</button>
            </div>

            {/* Home Button */}
            <button onClick={homeButton} className='form-submit'>Home</button>
        </div>
    )
}

export default Details