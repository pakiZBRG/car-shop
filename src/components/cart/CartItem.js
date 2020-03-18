import React from 'react';
import {Link} from 'react-router-dom';

export default function CartItem({item, value}){
   const {id, name, img, company, price, modelYear} = item;
   const {removeItem} = value;
   return(
      <div className='row my-4 text-center text-capitalize color-white'>
        <div className='col-10 mx-auto col-lg-2'>
            <Link to='/details'>
               <img src={img} alt='car' style={{width: '11rem', objectFit:'cover'}}/>
            </Link>
        </div>
        <div className='col-10 mx-auto col-lg-2 mt-md-3 align-self-center'>
           <h4>{name}</h4>
        </div>
        <div className='col-10 mx-auto col-lg-2 align-self-center'>
           <span className='d-lg-none'>Company: </span>
           <h5 className='text-orange font-weight-bold'>{company}</h5>
        </div>
        <div className='col-10 mx-auto col-lg-2 align-self-center'>
           <span className='d-lg-none'>Year: </span><h4 className='font-weight-bold'>{modelYear}</h4>
        </div>
        <div className='col-10 mx-auto col-lg-2 align-self-center'>
           <span className='d-lg-none'>Price: </span><h3 className='price-2 mx-auto'>€ {price.toLocaleString()}</h3>
        </div>
        <div className='col-10 mx-auto col-lg-2 align-self-center'>
            <div className='trash-icon' onClick={() => removeItem(id)}>
               <i className='fa fa-trash'></i>
            </div>
        </div>
      </div>
   )
}