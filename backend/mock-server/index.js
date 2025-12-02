// index.js
const mongoose = require('mongoose');
require('dotenv').config();
// const env = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/users');



const app = express();
const PORT = process.env.PORT || 3100;

// Подключение к MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Разрешаем CORS
app.use(cors());

// Поддерживаем JSON тела запросов
app.use(express.json());

// Регистрируем роуты
app.use('/api', userRoutes);

// Стартуем сервер
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});