const mongoose = require('mongoose')

const BootcampSchema = new mongoose.Schema({
    name : {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be longer than 50 character'],
    },
    slug : String,
    description : {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Name can not be longer than 500 character'],
    },
    website : {
        type : String,
        match : [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
    'Please add a valid URL of HTTPS or HTTP']

    },
    phone : {
        type : String,
        maxlength : [20, 'Phone Number can not be longer than 20 character']
    }, 
    email : {
        type : String,
        match : [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a Valid Email']
    }, 
    address : {
        type: String,
        required: [false, 'Please add a valid address']
    },
   photo : {
    type : String,
    default : 'no-photo.jpg'
   },
   createdAt : {
    type : Date,
    default : Date.now
   }

}) 

module.exports = mongoose.model('bootcamps', BootcampSchema )