import React from 'react';
import axios from 'axios';
import Changer from './Changer';
import { HashRouter as Router, Route } from 'react-router-dom'
import UpdateForm from './UpdateForm';
import Handbag from './Handbag'

export default class Main extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [],
            specials: []
        }
        this.getProducts = this.getProducts.bind(this);      
        this.setProducts = this.setProducts.bind(this)
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
        const {products, specials} = this.state;
        const {getProducts } = this;
        return(
            <div className='container'>
                <h1>Acme Products</h1>
                <h2>We have {specials.length} Special{specials.length > 1 || specials.length === 0 ? "s" : null }</h2>
                <Router>
                    <div>
                        <Route path='/' exact render={()=><Changer getProducts={getProducts} products={products} specials={specials}/>}/>
                        <Route path='/newproduct' exact render={()=><UpdateForm getProducts={getProducts}/>}/>
                        <Route path='/handbag' exact component={Handbag} />
                    </div>

                </Router>
            </div>
        )

    }

}
