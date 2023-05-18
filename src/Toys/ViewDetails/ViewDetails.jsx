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
        <div>
            <h2>{price}</h2>
        </div>
    );
};

export default VIewDetails;