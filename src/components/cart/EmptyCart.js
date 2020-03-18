import React from 'react';
import {Link} from 'react-router-dom';

export default function EmptyCart(){
   return(
      <div className='container mt-5'>
         <div className='row'>
            <div className='col-10 mx-auto text-center text-title'>
               <h1>Your cart is currently empty</h1>
               <h2>Go back to<Link to='/'> Store</Link></h2>
            </div>
         </div>
      </div>
   )
}