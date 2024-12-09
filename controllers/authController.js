const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Registrar usuário
exports.register = async (req, res) => {
  try {
    const { name, email, password, dateOfBirth } = req.body;
    const user = new User({ name, email, password, dateOfBirth });
    await user.save();
    res.status(201).json({ message: 'Usuário registrado com sucesso!' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Login do usuário
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).lean();
    if (!user) return res.status(400).json({ message: 'Usuário não encontrado' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Senha incorreta' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    delete user.password
    res.json({ token, user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};