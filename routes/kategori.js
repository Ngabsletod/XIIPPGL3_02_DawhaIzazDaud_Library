const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/categories');

router.get('/categories', kategoriController.getAllCategories);
router.post('/', kategoriController.createCategory);
router.put('/:id', kategoriController.updateCategory);
router.delete('/:id', kategoriController.deleteCategory);

module.exports = router;
