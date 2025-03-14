const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/users.json');

// Ler todos os usuários
const getAllUsers = () => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
};

// Salvar todos os usuários
const saveUsers = (users) => {
    fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
};

module.exports = { getAllUsers, saveUsers };