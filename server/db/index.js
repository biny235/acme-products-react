const conn = require('./conn');
const Product = require('./Product');

const syncAndSeed = ()=>{
    return conn.sync({force: true})
        .then(()=>{
            return Promise.all([
                Product.create({name: 'Shoe'}),
                Product.create({name: 'Car'}),
                Product.create({name: 'Table', isSpecial: true}),
            ])
        })
}

module.exports = {
    conn,
    syncAndSeed,
    models: {
        Product
    }
}

