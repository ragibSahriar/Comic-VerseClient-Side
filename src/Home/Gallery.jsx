import React from 'react';

const Gallery = () => {
    return (
        <div className='flex flex-wrap container mx-auto gap-4 justify-around p-6'>
            <div className="card w-96 glass">
  <figure><img  data-aos="fade-right" src="https://www.superherotoystore.com/cdn/shop/files/AAGE363AABI667-5_5000x.webp?v=1684220018" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">TRANSFORMERS STUDIO SERIES</h2>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img  data-aos="zoom-out-down" src="https://www.superherotoystore.com/cdn/shop/files/AAAI7AABI675-1_5000x.jpg?v=1684238627" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Captain America</h2>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img  data-aos="zoom-in-left" src="https://www.superherotoystore.com/cdn/shop/files/AAAI36AABI670-1_5000x.jpg?v=1684228859" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Iron Man</h2>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img data-aos="fade-up-right" src="https://www.superherotoystore.com/cdn/shop/files/AAAI79AABI671-1_5000x.webp?v=1684229303" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Black Panther</h2>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img  data-aos="zoom-out-up" src="https://www.superherotoystore.com/cdn/shop/products/AAEI40AABI633-3_5000x.jpg?v=1679734162" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Mech Strike</h2>
  </div>
</div>
            <div className="card w-96 glass">
  <figure><img   data-aos="fade-up-left" src="https://www.superherotoystore.com/cdn/shop/files/AAAI367AABI676-3_5000x.jpg?v=1684239871" alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">Titan Hero</h2>
  </div>
</div>
        </div>
    );
};

export default Gallery;