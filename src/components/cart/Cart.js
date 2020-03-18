import React from 'react';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {ProductConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends React.Component {
   render(){
      return (
         <section>
            <ProductConsumer>
               {value => {
                  const {cart} = value;
                  if(cart.length > 0){
                     return(
                        <React.Fragment>
                           <h1 className='text-orange text-center font-weight-bold my-5'>YOUR CART</h1>
                           <CartColumns/>
                           <CartList value={value}/>
                           <CartTotals value={value} history={this.props.history}/>
                        </React.Fragment>
                     )
                  } else {
                     return <EmptyCart/>
                  }
               }}
            </ProductConsumer>
         </section>
      )
   }
}