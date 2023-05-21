import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Table from './Table';

const Mytoy = () => {

    const [toys, setToys] = useState([]);
    const [sortAscending, setSortAscending] = useState(true);

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

    const handleSort = () => {
      setSortAscending(!sortAscending);
      const sortedToys = toys.slice().sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        if (sortAscending) {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
      setToys(sortedToys);
    };

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
      <div   data-aos="fade-down" >
         <div className="flex justify-end mr-4 my-8 text-xl font-mono">
  <button className="bg-sky-600 text-white p-4" onClick={handleSort}>
    Sort by {sortAscending ? 'Ascending' : 'Descending'} Price
  </button>
</div>

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