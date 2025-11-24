const express = require('express');
const cors = require('cors');

const app = express();

// Разрешаем фронтенду (http://localhost:5173) делать запросы
app.use(cors());
app.use(express.json()); // Парсит JSON из тела запроса

// Массив для хранения пользователей (временно, в памяти)
let users = [];

// Эндпоинт для регистрации
app.post('/register', (req, res) => {
    const { email, password } = req.body;

    // Проверка: пользователь уже существует?
    if (users.some(user => user.email === email)) {
        return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    // Добавляем нового пользователя
    users.push({ email, password }); // ⚠️ В реальности пароль нужно хэшировать!
    console.log('Зарегистрирован:', email);

    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
