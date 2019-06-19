const Transaction = require('../models/transaction.model');

module.exports.create = async (req, res) => {
  const transaction = new Transaction({
    product: req.body.product,
    phone: req.body.phone,
    amount: req.body.amount
  })

  console.log(transaction);

  try {
    await transaction.save();
    res.status(201).json(transaction);
  } catch (e) {
    res.status(500).json(e);
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({date: -1});
    res.json(transactions);
    console.log(transactions);
  } catch (e) {
    res.status(500).json(e);
  }
}

module.exports.getById = async (req, res) => {
  try {
    await Transaction.findById(req.params.id).exec((error, transaction) => {
      res.json(transaction);
    });
  } catch (e) {
    res.status(500).json(e);
  }
}

module.exports.update = async (req, res) => {
  try {
    const $set = {
      status: req.body.status
    };
    const transaction = await Transaction.findOneAndUpdate({
      _id: req.params.id
    }, {$set}, {new: true});
    res.json(transaction);
  } catch (e) {
    res.status(500).json(e);
  }
}