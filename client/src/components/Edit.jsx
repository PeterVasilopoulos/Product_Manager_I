import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

// Things to import:
// useState, axios, useEffect, useParams, useNavigate

const Edit = () => {
    // Title Variable
    const [title, setTitle] = useState("");
    // Price Variable
    const [price, setPrice] = useState(0);
    // Description Variable
    const [description, setDescription] = useState("");

    // Variable to store product id
    const {id} = useParams();

    // Variable for navigating
    const navigate = useNavigate();

    // useEffect to get product info
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) => {
            // Log data
            console.log("Edit page get request.", res)
            // Set song data into variables
            const product = res.data.results;
            setTitle(product.title);
            setPrice(product.price);
            setDescription(product.description);
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Edit page get request error.", err)
        })
    }, [])

    // Form submit handler
    const handleSubmit = (e) => {
        e.preventDefault();

        // Variable to hold updated product data
        const updatedData = {title, price, description};

        axios.put(`http://localhost:8000/api/products/update/${id}`, updatedData, {new: true})
        .then((res) => {
            // Log data
            console.log("Update page put request.", res)
            // Navigate to home page
            navigate('/')
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Update page put request error.", err)
        })
    }

    return (
        <div>
            <h1>Edit Product</h1>

            {/* Edit Product Form */}
            <form onSubmit={handleSubmit} id='create-product-form'>
                {/* Title */}
                <div className='form-section'>
                    <label className='form-label'>Title</label>
                    <input
                        type="text"
                        className='form-input'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                {/* Price */}
                <div className='form-section'>
                    <label className='form-label'>Price</label>
                    <input
                        type="number"
                        className='form-input'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                {/* Description */}
                <div className='form-section'>
                    <label className='form-label'>Description</label>
                    <input
                        type="text"
                        className='form-input'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                {/* Submit Button */}
                <button className='form-submit'>Submit</button>
            </form>
        </div>
    )
}

export default Edit