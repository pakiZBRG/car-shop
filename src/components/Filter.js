import React from 'react';

export default class Filter extends React.Component {
   render(){     
      const {company} = this.props.product;
      return( 
         <h1>{company}</h1>
      )
   }
}