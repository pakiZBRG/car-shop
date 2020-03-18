import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../context';

export default class Modal extends Component {
   render(){
      return (
         <ProductConsumer>
            {value => {
               const {name, price, img, modelYear} = value.modalProduct;
               const { modalOpen, closeModal } = value;
               if(!modalOpen){
                  return null;
               } else {
                  return (
                     <div id='modal' className='container-fluid'>
                        <div className='row'>
                           <div id='white-modal' className='col-8 mx-auto col-md-6 col-lg-4 text-center p-4'>
                              <h3 style={{color:'teal', fontWeight: 'bold'}}>Car Added To Cart</h3>
                              <img src={img} className='img-fluid mb-2' alt='car'/>
                              <h3 className='font-weight-bold'>{name}</h3>
                              <h4 className='font-weight-bold text-red'>{modelYear}</h4>
                              <h4 className='text-muted font-weight-bold'>€ {price.toLocaleString()}</h4><hr/>
                              <div className='d-flex justify-content-around'>
                                 <Link to='/'>
                                    <button className='modal-btn' onClick={() => closeModal()}>Store</button>
                                 </Link>
                                 <Link to='/cart'>
                                    <button className='modal-btn' onClick={() => closeModal()}>Cart</button>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  )
               }
            }}
         </ProductConsumer>
      )
   }
}