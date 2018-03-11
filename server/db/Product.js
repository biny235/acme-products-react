const conn = require('./conn')
const { Sequelize } = conn;

const Product = conn.define('product', {
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    isSpecial: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Product;