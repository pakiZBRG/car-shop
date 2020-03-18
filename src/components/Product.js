import React from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from './../context';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
   render(){
      const { id, name, price, modelYear, topSpeed, engineType, chassi, inCart, img } = this.props.product;
      return (
         <div className='col-9 mx-auto col-md-10 col-lg-6 my-5'>
            <div className='card mx-2'>
               <ProductConsumer>
                  {value => {
                     return (
                        <div className='img-container' onClick={() => 
                           value.handleDetail(id)
                        }>
                        <Link to='/details'>
                           <img src={img} alt='product' className='card-img-top car-image'/>
                        </Link>
                        <button 
                           className='add-btn' 
                           disabled = {inCart ? true: false} 
                           onClick={() => {
                              value.addToCart(id);
                              value.openModal(id);
                           }}
                        >
                           {inCart ? (<p className='mb-0 added-btn' disabled>Added</p>) : (<p className='mb-0'>Add To Cart</p>)}
                        </button>
                        </div>
                     )
                  }}
               </ProductConsumer>
               <div className='card-footer'>
                  <div className='d-flex justify-content-between'>
                     <p className='mb-0 black'>{name}</p>
                     <h5 className='align-self-center text-red price'>€{price.toLocaleString()}</h5>
                  </div><hr className='line'/>
                  <div className='d-flex justify-content-around text-black'>
                     <h5><i className="fa fa-calendar icon"></i> <span className='param'>{modelYear}</span></h5>
                     <h5><i className="fa fa-tachometer icon"></i> <span className='param'>{topSpeed} km/h</span></h5>
                  </div>
                  <div className='d-flex justify-content-around text-black'>
                     <h5><i className="fa fa-car icon"></i> <span className='param'>{chassi}</span></h5>
                     <h5><i className="fa fa-cogs icon"></i> <span className='param'>{engineType}</span></h5>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

Product.propTypes = {
   product: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      company: PropTypes.string,
      modelyear: PropTypes.number,
      topSpeed: PropTypes.number, 
      acceleration: PropTypes.number,
      engineType: PropTypes.string,
      power: PropTypes.string,
      horsePower: PropTypes.string,
      transmission: PropTypes.string,
      numberOfDoors: PropTypes.string,
      img: PropTypes.string,
      img1: PropTypes.string,
      img2: PropTypes.string,
      driveType: PropTypes.string,
      chassi: PropTypes.string,
      tankVolume: PropTypes.string,
      color: PropTypes.string,
      inCart: PropTypes.bool
   }).isRequired
}