import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

// Things to import:
// useState, useEffect, Link, axios

const ListProducts = () => {
    // Variable for all products
    const [products, setProducts] = useState([]);

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
    }, [])

    return (
        <div>
            <h1>All Products</h1>

            {/* Return All Products */}
            <div id='product-list'>
                {
                    products.map((product, i) => {
                        return (
                            <Link to={`/${product._id}`}>
                                <p key={i} className='product-list-item'>
                                    {product.title}
                                </p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListProducts