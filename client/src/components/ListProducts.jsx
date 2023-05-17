import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// Things to import:
// useState, useEffect, Link, axios

const ListProducts = () => {
    // Variable for all products
    const [products, setProducts] = useState([]);

    // Variable to check if something was deleted
    const [deleted, setDeleted] = useState(false);

    // Delete button function
    const deleteButton = (e, id) => {
        e.preventDefault();

        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
        .then((res) => {
            // Log data
            console.log("Delete request.", res)
            // Swap deleted variable
            setDeleted(!deleted)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Delete request error.", err)
        })
    }

    // useEffect to get all products from database
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then((res) => {
            // Log all data
            console.log("Product list get request:", res.data.results)
            // Put data into products variable
            setProducts(res.data.results)
        })
        .catch((err) => {
            // Log error if we get one
            console.log("Product list get request error:", err)
        })
    }, [deleted])

    return (
        <div>
            <h1>All Products</h1>

            {/* Return All Products */}
            <div id='product-list'>
                {
                    products.map((product, i) => {
                        return (
                            <div className="product">
                                {/* Product Link */}
                                <Link to={`/${product._id}`} key={i}>
                                    <p className='product-list-item'>
                                        {product.title}
                                    </p>
                                </Link>

                                {/* Delete Button */}
                                <button 
                                className='home-delete'
                                onClick={(e) => {deleteButton(e, product._id)}}>
                                    Delete
                                </button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListProducts