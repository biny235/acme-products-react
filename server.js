const express = require('express');
const app = express();
const path = require('path');
const db = require('./server/db');
const { Product } = db.models;

app.use(require('body-parser').json())

db.syncAndSeed()
    .then(()=> console.log('seeded'));


app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/api/products', (req,res,next)=>{
    Product.findAll()
        .then(products => res.send(products))
        .catch(next)
});

app.patch('/api/products/:id', (req,res,next)=>{
    Product.findById(req.params.id)
        .then(product =>{
            product.isSpecial = !product.isSpecial;
            return product.save()
        })
        .then(()=>{
            res.sendStatus(204)
        })
        .catch(next)
})
app.post('/api/products',(req, res, next)=>{
    console.log(req.body.product)
    Product.create(req.body.product)
        .then(product => res.send(product))
        .catch(next)
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening on ${port}`));