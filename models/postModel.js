const {model, Schema} = require('../connection'); // not importing all component just two components

const mySchema = new Schema({

    // collecting data from website of img upload by user

    // title : String,
    title : {type : String, required : true},
    username : String,
    postedAt : Date,
    description : String,
    image : String,
    // likes : Number,
    likes : {type : Number, default : 0},
    shares : {type : Number, default : 0}

});

module.exports = model('PostCollection', mySchema);   // creating a collection name for database
