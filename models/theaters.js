const mongoose = require('mongoose');


const theaters = mongoose.Schema({
  theater: {
    type: String,
    required: true,
    trim: true,
    lowercase : true
  },
  title:{
    type: String,
    required: true,
    trim : true,
    lowercase:true
  },
  location:{
    type: String,
    required: true,
    lowercase:true
  },
  

})

module.exports = mongoose.model('theaters' , theaters)
