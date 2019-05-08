const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const crdSchema = new Schema({
  general: { 
    name: { 
      type: String,
      required: true
  },
    email: {
      type: String, 
      required: true,
      validation: {

      }
    },
  },

  business: {
    name: { 
      type: String,
      required: true
    },
    website: {
      type: String, 
      required: false
    },
    category: {
      name: [],
    },
  },

  contact: {
    email: {
      type: String,
      required: false
    },
    phone: {
      type: String,
      required: false
    },
    address: {
      type: String,
      required: false
    }
  },

  network: {
    connections: []
  },

  social: {
    facebook: { type: String, required: false},
    linkedin: { type: String, required: false},
    twitter: { type: String, required: false},
    instagram: { type: String, required: false},
    other: { type: String, required: false},
  },

  description: { type: String, required: false},

  date: { type: Date, default: Date.now }
});

const Crds = mongoose.model("Crds", crdSchema);

module.exports = Crds;
