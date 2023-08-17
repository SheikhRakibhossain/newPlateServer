const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

//middle ware file and path.
app.use(cors());

const news = require('./data/News.json')
const categories = require('./data/categories.json')

app.get('/',(req, res)=>{
    res.send(`<h3>New server is running on port 5000, Please check</h3>`)
});

app.get('/categories',(req, res)=>{
    res.send(categories)
});

app.get('/news',(req, res)=>{
    res.send(news)
})

app.listen(port,(req, res)=>{
    console.log(`The port is running ${port}`)
});