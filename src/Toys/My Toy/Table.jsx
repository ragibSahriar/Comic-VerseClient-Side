import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({toy,handleDelete}) => {
    const {_id, seller, item, sub, price, quantity,photo} =toy;
    return (
        // <div>
             <tr>
                
                    <td>
                      <img className='w-12' src={photo} alt="" />
                    </td>
                    <td>{seller}</td>
                    <td>{item}</td>
                    <td>{sub}</td>
                    <td>{price}</td>
                    <td>{quantity}</td>
                    <td>
                      <th>
                      <button className='btn bg-red-500 mx-2 ' onClick={()=> handleDelete(_id)}>X</button>
                      </th>
                     <th>
                     <Link to={`/viewDetails/${_id}`}>
            <button className="btn bg-black">View Details</button></Link>
                     </th>
            </td>
                  </tr>
        // </div>
    );
};

export default Table;