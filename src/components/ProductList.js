import React from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';
import Footer from './Footer';
{/*import Filter from './Filter';*/}

export default class ProductList extends React.Component {
   render(){
      return (
         <React.Fragment>
            <div className='py-5'>
               <div className='container-a'>
                  <Title title={'CARS FOR SALE'}/>
                  {/*<ProductConsumer>
                     {value => {
                        return value.products.map(product => {
                           return <Filter product={product} key={product.id}/>
                        })
                     }}
                  </ProductConsumer>*/}
                  <div className='row py-5'>
                     <ProductConsumer>
                        {(value) => {
                           return value.products.map(product => {
                              return <Product product={product} key={product.id}/>
                           })
                        }}
                     </ProductConsumer>
                  </div>
               </div>
            </div>
            <Footer/>
         </React.Fragment>
      )
   }
}