import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom"
import { ProductList } from '../ProductList';

function ProDetails() {

const  myProductId = useParams();
const {id} = myProductId;
// console.log(" myProductId");

useEffect(() =>{
   const findproduct = ProductList.find((item) => item.id === Number(id));
   setProDetails(findproduct)

},[])

const [proDetails , setProDetails] = useState({})



  return (
<div className="container mt-5">
    <h1 className='mb-3'>Product Details {id}</h1>
    <hr/>
    {
        <div className="p-5">
            <img src={proDetails.img} alt="" />
      <h5>{proDetails.name}</h5>
<h4>{proDetails.price}</h4>
<p>{proDetails.desp}</p>
        </div>

    }
</div>

    );
}

export default ProDetails