const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crdSchema = new Schema({

  name: {
    type: String,
    
  },
  email: {
    type: String, 
    
  },
  phone: {
    type: Number, 

  },
  title: {
    type: String, 
  
  },
  category: {
    type: String,
  
  },

  address: {
    type: String
  },

  description: {
    type: String
  }, 

  skills: []


});

const Crd = mongoose.model("Crds", crdSchema);

module.exports = Crd;
