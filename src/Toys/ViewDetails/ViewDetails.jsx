import React from 'react';
import { useLoaderData } from 'react-router-dom';

const VIewDetails = () => {

    const toy = useLoaderData()
    const {
        _id,
        photo,
        item,
        seller,
        sub,
        price,
        rating,
        quantity,
        description,
        email,
      } = toy;

    return (
    
      <div className='flex items-center p-12 bg-gray-800'>
        <div className='border rounded shadow-lg shadow-rounded-xl'><img src={photo} alt="" /></div>
        <div className='w-3/4 m-4 p-5 border rounded text-gray-400 shadow-lg shadow-rounded-xl'>
            <h3 className='text-2xl font-semibold '>{item}</h3>
            <h3 className='text-xl'>Seller- {seller}</h3>
            <h3 className=''>E-mail- {email}</h3>
            <h3 className='text-xl'>Price: {price}.BDT</h3>
            <h3 className='text-xl'>Rating: {rating}</h3>
            <h3 className='text-xl'>Available Quantity: {quantity}</h3>
            <br />
            <h3 className='text-2xl'> <span className='text-sky-300'>Details:</span>
            
            <br />
            {description}</h3>
        </div>
      </div>
        
    );
};

export default VIewDetails;