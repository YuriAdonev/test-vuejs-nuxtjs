const {Schema, model} = require('mongoose');

const transactionSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  product: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  status: {
    type: Boolean,
    default: true
  }
});

module.exports = model('transactions', transactionSchema);