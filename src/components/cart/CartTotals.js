import React from 'react';
import {Link} from 'react-router-dom';
import PayPalButton from './PayPalButton'

export default function CartTotals({value, history}) {
   const {cartTotal, clearCart} = value;
   return (
      <React.Fragment>
         <div className='container'>
            <div className='row'>
               <div className='col-10 col-sm-8 mt-3 ml-sm-5 ml-md-auto text-right'>
                  <Link to='/'>
                     <button className='btn btn-outline-danger mb-3 px-5' onClick={() => clearCart()}>
                        <h4 className='mb-0'>CLEAR CART</h4>
                     </button>
                  </Link>
                  <h2 className='text-title'>
                     Total: <strong>€ {cartTotal.toLocaleString()}</strong>
                  </h2>
                  <PayPalButton 
                     total={cartTotal} 
                     clearCart={clearCart} 
                     history={history}
                  />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}