import React from 'react'
import { ProductList } from '../ProductList'
import {Link } from "react-router-dom"


function Product() {

  return (
<div className="container mt-5">
    <h1 className='mb-3'>Product List</h1>
    <hr/>
    <div className="row">
        {
            ProductList.map((item) => {
                const {id , name, img} = item;
                return(
        <div className="col-md-4">
    <div className="card p-4 mt-3 "  >
                <div className='card-body shadow border-1 my-2 rounded'>
                    <img src={img} alt="" style={{width:"200px", height:"200px"}} />
                    <div key={id} className="p-3  d-flex justify-content-between">
                    <h5>{name}</h5>
<Link to={`/productName/${id}`}> View Details</Link>
                    </div>
                </div>
    </div>
        </div>

                    
            )})
        }
        </div>
        </div>


    )
}

export default Product