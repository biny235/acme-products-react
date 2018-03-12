import React from 'react';

const Selector = props=>{
    const {products, onChange} = props
    
    return(
        <select onChange={onChange} className="form-control">
            <option value="">---</option>
            {products.map(product=>{
                return(
                    <option key={product.id} value={product.id}>
                        {product.name}
                    </option>
                )
            })}
        </select>
    )
};

export default Selector;