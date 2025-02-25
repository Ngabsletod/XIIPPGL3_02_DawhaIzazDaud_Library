const Book = require('../models/book');

const getindex = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json({
            message: 'GET all books success',
            data: books
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        });
    }
};

const createnew = async (req, res) => {
    const { body } = req;
    try {
        const newBook = await Book.create(body);
        res.json({
            message: 'CREATE new book',
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await book.update(body);
        res.json({
            message: 'UPDATE berhasil',
            data: book,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        await book.destroy();
        res.json({
            message: 'DELETE book success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message,
        });
    }
};

const getByid = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json({
            message: 'GET book by ID success',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
};

module.exports = {
    getindex,
    createnew,
    updateUser,
    deleteUser,
    getByid,
};
