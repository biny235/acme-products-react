import React from 'react';
import Selector from './Selector';

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.setState({products: this.props.products})
    }
    componentWillReceiveProps(nextProps){
        if(this.state.products != nextProps.products){
            const products = nextProps.products;
            this.setState({products})
        }
    }
    render(){
        const { onChange, onClick, selectedProduct } = this.props;
        const { products } = this.state;
        return(
            <form className="form-inline">
                <Selector onChange={ onChange } products={products} />
                <button className="btn btn-success" disabled={selectedProduct === "" } onClick={ onClick }>Change</button>
            </form>
        )
    }
}

export default Form