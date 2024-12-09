const User = require('../models/User');

exports.getUser = async (req, res) => {
  try {
    const {id} = req.params;
    const user = await User.findOne({ _id: id }).lean();
    delete user.password
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const {id} = req.params;
    await User.findOneAndDelete ({ _id: id });
    res.status(200).json("usuário deletado");
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.patchUser = async (req, res) => {
  try {
    const {id} = req.params;
    await User.findOneAndUpdate({ _id: id }, req.body);
    const user = await User.findOne({ _id: id }, req.body).lean();
    delete user.password
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
  
    const users = await User.find(filters).lean();
    const filteredUsers = users.map((user)=> {
      delete user.password
      return user
    })
    res.json(filteredUsers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};