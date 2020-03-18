import React from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from './../context';

export default class Navbar extends React.Component {
   render(){
      return (
         <ProductConsumer>
            {value => {
               const { cart } = value; 
               return(
                  <nav className='navbar navbar-expand-sm px-sm-5 py-3 nav'>
                     <ul className='navbar-nav align-items-center'>
                        <li className='nav-item ml-2'>
                           <Link to='/' className='name'>Makelele Car Shop</Link>
                        </li>
                     </ul>
                     <Link to='/cart' className='ml-auto'>
                        <button className='cart-btn'>
                           <i className='fa fa-shopping-cart'></i> 
                           {cart.length === 0 ? ' Cart' : <span> Cart<span className='a'>{cart.length}</span></span>}
                        </button>
                     </Link>
                  </nav>
               )
            }}
         </ProductConsumer>
         
      )
   }
}