import React from 'react';

export default class Default extends React.Component {
   render(){
      return (
         <div className='container'>
            <div className='row'>
               <div className='col-10 mx-auto text-center text-uppercase text-title pt-5'>
                  <h1 className='display-3'>Error 404</h1>
                  <h1 className='display-4'>Page not found</h1>
                  <h2>The reuqested url<span className='color'>{this.props.location.pathname}</span> was not found</h2>
               </div>
            </div>
         </div>
      )
   }
}