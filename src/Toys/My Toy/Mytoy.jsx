import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Table from './Table';

const Mytoy = () => {

    const [toys, setToys] = useState([]);

    const {user} = useContext(AuthContext);

    const handleDelete = (_id, event) => {
      console.log(_id);
      // event.preventDefault();
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(`https://comic-verse-server.vercel.app/toy/${_id}`, {
            method: 'DELETE',
            
          })
          .then(res => res.json())
          .then(data => {
            setToys(data);
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your Toy has been deleted.',
                'success'
                )
                const remaining = toys.filter(toy => toy._id !== _id);
                      setToys(remaining)
                  
                  // })
            }
          })
        }
      })

    }

    useEffect(()=>{
        fetch(`https://comic-verse-server.vercel.app/myToys/${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setToys(data);
        })
        .catch(error => {
          console.error('Error fetching toys:', error);
          // Handle error, e.g., show an error message
        });
    },[user])

    





    return (
        <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
            {
              toys.map(toy => <Table
              key={toy._id}
              toy={toy}
              handleDelete={handleDelete}
              ></Table>)
            }
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Mytoy;