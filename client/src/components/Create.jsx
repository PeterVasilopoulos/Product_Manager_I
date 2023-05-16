import React, {useState} from 'react';
import axios from 'axios';

// Things to import:
// useState, axios

const Create = () => {
    // Title Variable
    const [title, setTitle] = useState("");
    // Price Variable
    const [price, setPrice] = useState(0);
    // Description Variable
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        // Prevent button default behavior
        e.preventDefault();

        // Post new song into database
        axios.post("http://localhost:8000/api/products/new", {title, price, description})
        .then((res) => {
            // Log data
            console.log("Create page success:", res);
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Create page error:", err);
        })
    }


    return (
        <div>
            <h1>Create Product</h1>

            {/* Create Product Form */}
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

export default Create