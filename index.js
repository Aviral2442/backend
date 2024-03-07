const express = require('express');     // import expresss 

const app = express();    // initalize express

const port = 5000;  // default port

// start express server


app.get('/' , ( req, res) => {
    res.send( 'response from express server');
});// request 

app.get('/add' , ( req, res) => {
    res.send( ' add response from express server');
});// request 


app.listen( port, () => { console.log('express server started')});
