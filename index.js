const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("Get Api is up and running with auto sync on docker. Now I don't need to build image each and every time after making changes on local");
})

app.listen(port, ()=>{
    console.log('App is running')
})