const Rental = require('../models/Rental');

exports.createRental = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    await rental.save();
    res.status(201).json(rental);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllRentals = async (req, res) => {
  try {
    const { customerName, email, guitarModel, startDate, endDate } = req.query;
    let filters = {};

    if (customerName) filters.customerName = { $regex: customerName, $options: 'i' };
    if (email) filters.email = email;
    if (guitarModel) filters.guitarModel = { $regex: guitarModel, $options: 'i' };
    if (startDate && endDate) filters.rentalDate = { $gte: new Date(startDate), $lte: new Date(endDate) };

    const rentals = await Rental.find(filters);
    res.json(rentals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};