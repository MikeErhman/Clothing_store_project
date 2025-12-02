const express = require('express');
const cors = require('cors')
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const port = 3100;
; // импорт модуля CORS
// Включаем CORS для всех запросов
app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*"); // разрешён доступ со всех доменов
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });


// Маршруты и остальная логика...

// Запуск сервера
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});



app.use(express.json()); // поддержка JSON-тел в запросах

app.use((req, res, next) => {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; connect-src 'self' http://localhost:*"
  );
  next();
});

// Ручная регистрация нового пользователя (пример POST-запроса)
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email и пароль обязательны!' });
  }

  // Обычно здесь была бы запись в базу данных, но мы симулируем успешную регистрацию
  return res.status(201).json({ message: 'Регистрация прошла успешно!', user: { email, password } });
});

// Получение всех зарегистрированных пользователей (пример GET-запроса)
app.get('/users', (req, res) => {
  const users = [
    { id: 1, email: 'user1@example.com' },
    { id: 2, email: 'user2@example.com' },
  ];

  return res.json(users);
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Mock server запущен на http://localhost:${port}`);
});







// Используем переменную MONGO_URI из .env файла
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));