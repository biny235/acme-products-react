import React from 'react';
import axios from 'axios';
import Selector from './Selector';
import Form from './Form';
import UpdateForm from './UpdateForm';


export default class Changer extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [],
            specials: []
        }
        this.changeSpecial = this.changeSpecial.bind(this)
    }
   
    changeSpecial(id){
        axios.patch(`/api/products/${id}`)
            .then(()=>this.props.getProducts())    
    }
    componentDidMount(){
        this.setState({products: this.state.products, specials:this.state.specials})
    }
    render(){

        const { products, specials } = this.props;
        const { createProduct, changeSpecial } = this;
        return(
                <div>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <h3>Products</h3>
                            <Form function={changeSpecial} products={products}/>
                        </div>
                        <div className='col-xl-6'>
                            <h3>Specials</h3>
                            <Form function={changeSpecial} products={specials}/>
                        </div>  
                    </div>
                </div>
        )
    }
};