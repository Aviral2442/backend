const express = require('express');
const router = express.Router();
const Model = require('../models/postModel');

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save() // to save data in mongo db

        // thenc

        .then((result) => {
            res.status(200).json(result);  // status code 200 meNS DATA is saved in mongo db just like error 404
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);     // status code 500 

            // response status code
            // 100 - 199 - informational
            // 200 -299 - success
            // 300 - 399 - 
            // 400 499 - client side error
            // 500 - 599 - server / backend side error

        });

    //   res.send('post add operation');  only for response
});


// taking data from backend / database

router.get('/getall', (req, res) => {
    Model.find()

        //    thenc
        .then((result) => {
            res.status(200).json(result);  // status code 200 meNS DATA is saved in mongo db just like error 404
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);     
        });
    });

    // delete post

    // : denotes url parameter
    router.delete('/delete/:id', (req, res) => {
        Model.findByIdAndDelete(req.params.id)

        .then((result) => {
            res.status(200).json(result);  // status code 200 meNS DATA is saved in mongo db just like error 404
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);     
        });

    })


    module.exports = router;