import React from 'react';

export default function CartColumns() {
   return(
      <div className='container-fluid text-center d-none d-lg-block'>
         <div className='row'>
            <div className='col-10 mx-auto col-lg-2'>
               <h4 className='text-uppercase' style={{color: 'grey'}}>car</h4>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <h4 className='text-uppercase' style={{color: 'grey'}}>model name</h4>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <h4 className='text-uppercase' style={{color: 'grey'}}>company</h4>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <h4 className='text-uppercase' style={{color: 'grey'}}>year</h4>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <h4 className='text-uppercase' style={{color: 'grey'}}>price</h4>
            </div>
            <div className='col-10 mx-auto col-lg-2'>
               <h4></h4>
            </div>
         </div>
      </div>
   )
}