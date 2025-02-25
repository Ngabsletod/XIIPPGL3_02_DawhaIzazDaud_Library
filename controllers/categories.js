const Kategori = require('../models/kategoriModel');

// GET semua kategori
const getAllCategories = async (req, res) => {
    try {
        const categories = await Kategori.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST tambah kategori baru
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const newCategory = await Kategori.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// PUT update kategori berdasarkan ID
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const category = await Kategori.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        category.name = name;
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE kategori berdasarkan ID
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Kategori.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllCategories,
    createCategory,
    updateCategory,
    deleteCategory
};
