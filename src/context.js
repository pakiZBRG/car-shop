import React from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
const ProductConsumer = ProductContext.Consumer;

export default class ProductProvider extends React.Component {
   state = {
      products: [],
      detailProduct: detailProduct,
      cart: [],
      modalOpen: false,
      modalProduct: detailProduct,
      cartTotal: 0
   }

   componentDidMount = () => {
      this.setProducts();
   }

   setProducts = () => {
      let newProducts = [];
      storeProducts.forEach(item => {
         //Copying the single value
         const singleItem = {...item}
         newProducts = [...newProducts, singleItem];
      })
      this.setState({ products: newProducts })
   }

   getItem = (id) => {
      const product = this.state.products.find(item => item.id === id);
      return product;
   }

   handleDetail = (id) => {
      const product = this.getItem(id);
      this.setState({ detailProduct: product })
   }

   addToCart = (id) => {
      let tempProducts = [...this.state.products];
      const index = tempProducts.indexOf(this.getItem(id))
      const product = tempProducts[index];
      product.inCart = true;
      const price = product.price;
      product.total = price;
      this.setState({ products: tempProducts, cart: [...this.state.cart, product] },  () => {
         this.addTotals();
      })
   }

   openModal = (id) => {
      const product = this.getItem(id);
      this.setState({ modalProduct: product, modalOpen: true })
   }

   closeModal = () => {
      this.setState({ modalOpen: false })
   }

   removeItem = (id) => {
      let tempProducts = [...this.state.products];
      let tempCart = [...this.state.cart];
      tempCart = tempCart.filter(item => item.id !== id);
      const index = tempProducts.indexOf(this.getItem(id));
      let removed = tempProducts[index];
      removed.inCart = false;
      this.setState({ cart: [...tempCart], products: tempProducts }, () => {
         this.addTotals();
      })
   }

   clearCart = () => {
      this.setState({ cart:[] }, () => {
         this.setProducts();
         this.addTotals();
      })
   }

   addTotals = () => {
      let subTotal = 0
      this.state.cart.map(item => (subTotal += item.price));
      this.setState({ cartTotal: subTotal })
   }

   render() {
      return(
         <ProductContext.Provider 
            value = {{ 
               ...this.state, 
               handleDetail: this.handleDetail,
               addToCart: this.addToCart,
               openModal: this.openModal,
               closeModal: this.closeModal,
               removeItem: this.removeItem,
               clearCart: this.clearCart
            }}>
            {this.props.children}
         </ProductContext.Provider>
      )
   }
}

export {ProductProvider, ProductConsumer}