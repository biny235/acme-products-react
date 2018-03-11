import React from 'react';
import axios from 'axios';
import Selector from './Selector';
import Form from './Form'



export default class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [],
            specials: [],
            selectedProduct: "",
            selectedSpecial: ""
        }
        this.getProducts = this.getProducts.bind(this);
        this.productSelect = this.productSelect.bind(this);
        this.specialSelect = this.specialSelect.bind(this);
        this.makeProduct = this.makeProduct.bind(this);
        this.makeSpecial = this.makeSpecial.bind(this);
        this.changeSpecial = this.changeSpecial.bind(this)
        this.setProducts = this.setProducts.bind(this)
    }

    makeProduct(ev){
        ev.preventDefault();  
        this.changeSpecial(this.state.selectedSpecial)
    }
    makeSpecial(ev){
        ev.preventDefault();
        this.changeSpecial(this.state.selectedProduct)
    }
    changeSpecial(id){
        axios.patch(`/api/products/${id}`)
            .then(()=>this.getProducts())
        
    }
    productSelect(ev){
        this.setState({
            products: this.state.products,
            specials: this.state.specials,
            selectedSpecial: this.state.selectedSpecial,
            selectedProduct:ev.target.value
        })
    }
    specialSelect(ev){
        this.setState({
            products: this.state.products,
            specials: this.state.specials,
            selectedProduct: this.state.selectedProduct,
            selectedSpecial:ev.target.value,
        })
    }
    setProducts(products){
        const _products = products.filter(product => !product.isSpecial)
        const specials = products.filter(product => product.isSpecial)
        this.setState({products: _products, specials})
    }
    getProducts(){
        axios.get('/api/products')
            .then(response => response.data)
            .then(products =>  this.setProducts(products));
        
    }
    componentDidMount(){
        this.getProducts()
    }

    render(){
        const { products, specials, selectedProduct, selectedSpecial } = this.state;
        const { productSelect, specialSelect, makeProduct, makeSpecial } = this;
        return(
            <div className='container'>
                <h1>Acme Products</h1>
                <h2>We have {specials.length} Special{specials.length > 1 || specials.length === 0 ? "s" : null }</h2>
                <div className='row'>
                    <div className='col-xl-6'>
                        <h3>Products</h3>
                        <Form onChange={productSelect} selectedProduct={selectedProduct} onClick={makeSpecial} products={products}/>
                    </div>
                    <div className='col-xl-6'>
                        <h3>Specials</h3>
                        <Form onChange={specialSelect} selectedProduct={selectedSpecial} onClick={makeProduct} products={specials}/>
                    </div>  
                </div>
            </div>
        )
    }
};