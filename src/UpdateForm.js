import React from 'react';
import axios from 'axios';

class UpdateForm extends React.Component{

    constructor(){
        super()
        this.state = {
            name: "",
            isSpecial: false
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.specialChange = this.specialChange.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }
    onChange(ev){
        this.setState({name: ev.target.value, isSpecial:this.state.isSpecial})
    }
    specialChange(ev){
        console.log(ev.target.value)
        this.setState({name: this.state.product, isSpecial: ev.target.value})
    }
    onSubmit(ev){
        ev.preventDefault()
        this.createProduct(this.state)
    }
    createProduct(product){
        console.log(product.name.toLowerCase())
        axios.post('/api/products', {product})
            .then(()=>{this.props.getProducts()})

        if(product.name.toLowerCase() === 'handbag'){
            document.location.hash = "/handbag"
        }
    }


    render(){
        const {product} = this.state
        const {onChange, onSubmit, specialChange} = this
        return(
            <div>
                <form onSubmit={onSubmit} className='form-group'>
                    <input className='form-control' name="name" onChange={onChange} placeholder="Add new product"/>
                    <select onChange={specialChange} className="form-control">
                        <option value='false'>Regular</option>
                        <option value='true'>Special</option>
                    </select>
                    <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        )
    
        
    }

}

export default UpdateForm;