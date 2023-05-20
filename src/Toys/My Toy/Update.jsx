import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const updates = useLoaderData();
    const {_id, photo, item, seller, sub, price, rating, quantity, description,email} = updates;

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
        // const email = user?.email;
        
        const updatedToy = {_id, photo, item, seller, sub, price, rating, quantity, description}

        console.log(updatedToy);

        fetch(`https://comic-verse-server.vercel.app/specToys/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Toy Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div className='bg-gray-800'>
        <h2 className='text-white text-center text-4xl pt-16'>Update Toy - <br /> {item}</h2>
       <form onSubmit={handleAddToy}>
      
      <div className='flex space-x-9 container mx-auto p-8'>
      <div>
      <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Picture URL</span>

</label>
<input type="text" placeholder="Type here" name='photo' defaultValue={photo} className="input input-bordered w-full max-w-xs" />

</div>
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Name</span>

</label>
<input type="text" placeholder="Type here" name='item' defaultValue={item} className="input input-bordered w-full max-w-xs" />

</div>
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Seller Name</span>

</label>
<input type="text" placeholder="Type here" name='seller' defaultValue={name} className="input input-bordered w-full max-w-xs" />

</div>
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Sub-category</span>

</label>
<input type="text" placeholder="Type here" name='sub' defaultValue={sub} className="input input-bordered w-full max-w-xs" />

</div>
      </div>
<div>
<div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Price</span>

</label>
<input type="text" placeholder="Type here" name='price' defaultValue={price} className="input input-bordered w-full max-w-xs" />

</div>
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Rating</span>

</label>
<input type="text" placeholder="Type here" name='rating' defaultValue={rating} className="input input-bordered w-full max-w-xs" />

</div>
       
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Available quantity</span>

</label>
<input type="text" placeholder="Type here" name='quantity' defaultValue={quantity} className="input input-bordered w-full max-w-xs" />

</div>
       <div className="w-full max-auto container ml-12">
<label className="label">
<span className="text-white">Description
</span>

</label>
<input type="text" placeholder="Type here" name='description' defaultValue={description} className="input input-bordered w-full max-w-xs" />

</div>
</div>
      </div>
<input type="submit" value="Update toy" className='btn btn-block' />
       </form>
    </div>
    );
};

export default Update;