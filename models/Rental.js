const { Schema, model } = require('mongoose');

const rentalSchema = new Schema({
  customerName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  guitarModel: {
    type: String,
    required: true,
  },
  rentalDate: {
    type: Date,
    required: true,
  },
  returnDate: {
    type: Date,
    required: true,
  },
});

module.exports = model ('Rental', rentalSchema);