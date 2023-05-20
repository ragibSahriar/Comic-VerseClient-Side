import React, { useContext } from 'react';
import { initializeApp } from 'firebase/app';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
// import default from './../../tailwind.config';

const Addtoy = () => {

  const {user} = useContext(AuthContext)

    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const item = form.item.value;
        const seller = form.seller.value;
        const sub  = form.sub.value; 
        const price  = form.price.value; 
        const rating  = form.rating.value;  
        const quantity  = form.quantity.value; 
        const description = form.description.value;
        const email = user?.email;
        
        const addToy = {photo, item, seller, sub, price, rating, quantity, description,email}

        console.log(addToy);

        fetch('https://comic-verse-server.vercel.app/addtoy',{
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
              Swal.fire({
                title: 'Success!',
                text: 'Toy Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            }
        })

    }

    return (
        <div className='bg-gray-800'>
            <h2 className='text-white text-center text-4xl pt-16'>Add Toy</h2>
           <form onSubmit={handleAddToy}>
          <div className='flex space-x-9 container mx-auto p-8'>
          <div>
          <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Picture URL</span>
    
  </label>
  <input type="text" placeholder="Type here" name='photo' className="input input-bordered w-full max-w-xs" />
  
</div>
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Name</span>
    
  </label>
  <input type="text" placeholder="Type here" name='item' className="input input-bordered w-full max-w-xs" />
  
</div>
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Seller Name</span>
    
  </label>
  <input type="text" placeholder="Type here" name='seller' className="input input-bordered w-full max-w-xs" />
  
</div>
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Sub-category</span>
    
  </label>
  <input type="text" placeholder="Type here" name='sub' className="input input-bordered w-full max-w-xs" />
  
</div>
          </div>
 <div>
 <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Price</span>
    
  </label>
  <input type="text" placeholder="Type here" name='price' className="input input-bordered w-full max-w-xs" />
  
</div>
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Rating</span>
    
  </label>
  <input type="text" placeholder="Type here" name='rating' className="input input-bordered w-full max-w-xs" />
  
</div>
           
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Available quantity</span>
    
  </label>
  <input type="text" placeholder="Type here" name='quantity' className="input input-bordered w-full max-w-xs" />
  
</div>
           <div className="w-full max-auto container ml-12">
  <label className="label">
    <span className="text-white">Description
</span>
    
  </label>
  <input type="text" placeholder="Type here" name='description' className="input input-bordered w-full max-w-xs" />
  
</div>
 </div>
          </div>
 <input type="submit" value="add toy" className='btn btn-block' />
           </form>
        </div>
    );
};

export default Addtoy;