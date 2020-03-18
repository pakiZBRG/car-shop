import React from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import Footer from './Footer';

export default class Details extends React.Component {
   render(){
      return (
         <ProductConsumer>
            {(value) => {
               const {id, name, company, price, modelYear, topSpeed, acceleration, engineType, power, horsePower, transmission, numberOfDoors, img, img1, img2, driveType, chassi, tankVolume, color, inCart} = value.detailProduct;           
               return (
                  <div>
                     <div className='container py-5 kanit'>
                        <div className='row'>
                           <div className='col-10 mx-auto text-center my-5'>
                              <h1 className='text-white'>{name}</h1>
                              <h2 className='text-red'>{company}</h2>
                           </div>
                        </div>
                        <div className='row'>
                           <div className='col-11 mx-auto my-3'>
                              <img src={img1} alt='car' className='car-outline img-fluid mb-5'/>
                              <img src={img2} alt='car' className='car-outline img-fluid mb-5'/>
                              <img src={img} alt='car' className='car-outline img-fluid'/>
                           </div>
                           <div className='col-10 mx-auto text-center col-md-6 my-5'>
                              <h1>Price: <span className='text-title color-red'>€{price.toLocaleString()}</span></h1>
                              <h2>Model Year: <span className='text-title color-red'>{modelYear}</span></h2>
                              <h2>Company: <span className='text-red'>{company}</span></h2>
                           </div>
                        </div>
                        <div className='d-lg-flex justify-content-around d-sm-block'>
                           <div className='flex-column'>
                              <h3>Top Speed: <span className='text-title color'>{topSpeed}km/h</span></h3>
                              <h3>Acceleration (0-100km/h): <span className='text-title color'>{acceleration}s</span></h3>
                              <h3>Power: <span className='text-title color'>{power}</span></h3>
                              <h3>Horse Power: <span className='text-title color'>{horsePower}</span></h3>
                              <h3>Engine Type: <span className='text-title color'>{engineType}</span></h3>
                           </div>
                           <div className='flex-column'>
                              <h3>Transmission: <span className='text-title color'>{transmission}</span></h3>
                              <h3>Number of doors: <span className='text-title color'>{numberOfDoors}</span></h3>
                              <h3>Drive Type: <span className='text-title color'>{driveType}</span></h3>
                              <h3>Chassis: <span className='text-title color'>{chassi}</span></h3>
                              <h3>Tank Volume: <span className='text-title color'>{tankVolume}</span></h3>
                           </div>
                        </div>
                        <h3 className='text-center my-5'>Color: <span className='tetx-title color'>{color}</span></h3>
                        <Link to='/'>
                           <button className='back-btn'>Go Back</button>
                        </Link>
                        <button 
                           className='add-btn-2' 
                           disabled={inCart ? true : false} 
                           onClick={() => {
                              value.addToCart(id);
                              value.openModal(id);
                           }}
                        >
                           {inCart ? 'Added': 'Add To Cart'}
                        </button>
                     </div>
                     <Footer/>
                  </div>
               )
            }}
         </ProductConsumer>
      )
   }
}