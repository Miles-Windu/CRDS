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
    // required: false
  },
  title: {
    type: String, 
    // required: false
  },
  category: {
    type: String,
    // required: false
  },
  skills: {
    type: String,
    // required: false 
  },
  imgpath: {
    type: String,
    //required: false
  }

});

const Crd = mongoose.model("Crds", crdSchema);

module.exports = Crd;
