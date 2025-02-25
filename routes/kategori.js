const express = require('express');
const router = express.Router();
const kategoriController = require('../controllers/categories');

router.get('/categories', kategoriController.getAllCategories);
router.post('/categories', kategoriController.createCategory);
router.put('/categories/:id', kategoriController.updateCategory);
router.delete('/categories/:id', kategoriController.deleteCategory);

module.exports = router;
