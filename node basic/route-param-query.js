const express = require('express')
const bodyParser = require('body-parser')
const {products} = require('./data.js')
const app = express();

app.get('/',(req, res)=> {
    res.send(`<h1>Home Page</h1><a href ='/api/products'>Products</a>`)
})

app.get('/api/products', (req, res)=>{
    const newProduct = products.map((item)=>{
        const {id, name, image} = item;
        return {id, name, image};
    })
    res.json(newProduct);
})
// using route param
app.get('/api/products/:productId', (req, res)=>{
    const {productId} = req.params;
    const singleProduct = products.find((item)=> item.id == Number(productId));
    if (!singleProduct){
        res.status(404).send("<h3>Opps! Not Found</h3>")
    }
    res.json(singleProduct);
})
// route param can be complex too
app.get('/api/products/:productId/reviews/:reviesId', (req, res)=>{
    const {productId} = req.params;
    const singleProduct = products.find((item)=> item.id == Number(productId));
    if (!singleProduct){
        res.status(404).send("<h3>Opps! Not Found</h3>")
    }
    console.log(req.params)
    res.json(singleProduct);
})
// app.get('/api/v/query', (req, res)=>{
//     console.log(req.query);
//     res.send("Not Found");
// })

app.get('/api/v/query', (req, res)=>{
    const {search, limit} = req.query;
    var sortedProducts  = [...products];
    if (search){
        sortedProducts = products.filter((product)=> {
            return product.name.startsWith(search);
        });
    }
    if (limit){
        sortedProducts = sortedProducts.slice(0,limit);
    }
    if (sortedProducts.length < 1){
        res.status(404).send('Not Found')
    }
    res.json(sortedProducts);

})

app.listen(3000, (req, res)=>{
    console.log("Server is running on port 30000")
})
