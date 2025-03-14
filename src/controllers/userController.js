const userService = require('../services/userService');

// Controlador para listar usuários
const listUsers = (req, res) => {
    try {
        const users = userService.listUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para obter um usuário por ID
const getUserById = (req, res) => {
    try {
        const user = userService.getUserById(parseInt(req.params.id));
        if (!user) return res.status(404).json({ error: 'Usuário não encontrado.' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para criar um usuário
const createUser = (req, res) => {
    try {
        const newUser = userService.createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para atualizar um usuário
const updateUser = (req, res) => {
    try {
        const updatedUser = userService.updateUser(parseInt(req.params.id), req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controlador para deletar um usuário
const deleteUser = (req, res) => {
    try {
        userService.deleteUser(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { listUsers, getUserById, createUser, updateUser, deleteUser };