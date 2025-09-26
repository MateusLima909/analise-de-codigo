const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Número de conexões que o pool pode manter
    queueLimit: 0
});

// Mensagem para confirmar que o pool foi criado ao iniciar o servidor
console.log("Pool de conexões com o banco de dados criado com sucesso!");

// Função para listar todos os usuários
const getAllUsers = async () => {
    const [rows] = await pool.execute('SELECT * FROM users');
    return rows;
};

// Função para obter um usuário por ID
const getUserById = async (id) => {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
};

// Função para criar um novo usuário
const createUser = async (userData) => {
    const [result] = await pool.execute(
        'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)',
        [userData.name, userData.email, userData.phone]
    );
    return { id: result.insertId, ...userData };
};

// Função para atualizar um usuário
const updateUser = async (id, updatedData) => {
    await pool.execute(
        'UPDATE users SET name = ?, email = ?, phone = ? WHERE id = ?',
        [updatedData.name, updatedData.email, updatedData.phone, id]
    );
    return { id, ...updatedData };
};

// Função para deletar um usuário
const deleteUser = async (id) => {
    await pool.execute('DELETE FROM users WHERE id = ?', [id]);
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };