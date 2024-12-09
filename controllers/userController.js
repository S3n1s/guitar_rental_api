const User = require('./models/User');

exports.getUser = async (req, res) => {
  try {
    const {id} = req.param;
    const user = await User.findOne(id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const {id} = req.param;
    const user = await User.findOneAndRemove (id);
    res.status(200);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.putUser = async (req, res) => {
  try {
    const {id} = req.param;
    const user = await User.findOne(id);
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { name, email, dateOfBirth, } = req.query;
    let filters = {};

    if (name) filters.name = { $regex: name, $options: 'i' };
    if (email) filters.email = email;
    if (dateOfBirth) filters.dateOfBirth = dateOfBirth;
  
    const user = await User.find(filters);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};