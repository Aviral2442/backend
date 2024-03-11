const express = require('express');     // import expresss 
const cors = require('cors'); // import corss

const app = express();    // initalize express

const postRouter = require('./routers/postRouter'); // connecting from postrouter.js file

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());  // convert json to js 

app.use('/post', postRouter);

const port = 5000;  // default port

// start express server


app.post('/add' , ( req, res) => {
    res.send( 'response from express server');
});// request 

app.get('/add' , ( req, res) => {
    res.send( ' add response from express server');
});// request 


app.listen( port, () => { console.log('express server started')});
