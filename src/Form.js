import React from 'react';
import Selector from './Selector';

class Form extends React.Component {
    constructor(){
        super()
        this.state = {
            selected: ""
        }
        this.onSelect = this.onSelect.bind(this);
        this.onChangePress = this.onChangePress.bind(this);
        this.onUpdatePress = this.onUpdatePress.bind(this)
    }
    componentDidMount(){
        this.setState({selected: this.props.products})
    }

    onSelect(ev){
        this.setState({ selected: ev.target.value })
    }

    onChangePress(ev){
        ev.preventDefault();
        this.props.function(this.state.selected);
        this.setState({ selected: "" });
    };

    onUpdatePress(ev){
        ev.preventDefault()
        document.location.hash = `/products/${this.state.selected}`
    }

    
    

    render(){
        const { products } = this.props;
        const { onSelect, onChangePress, onUpdatePress } = this;
        const { selected } = this.state;
        return(
            <form className="form-inline">
                <Selector onChange={ onSelect } products={products} />
                <button className="btn btn-success" disabled={selected === "" } onClick={ onChangePress }>Change</button>
                <button className="btn btn-warning" disabled={selected === "" } onClick={ onUpdatePress }>Update</button>
            </form>
        )
    }
}

export default Form;