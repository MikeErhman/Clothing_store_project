
// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует.' });
    }

    const newUser = new User({ email, password });
    await newUser.save();

    return res.status(201).json({ message: 'Регистрация прошла успешно!', user: newUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Исключение поля password
    return res.json(users);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;