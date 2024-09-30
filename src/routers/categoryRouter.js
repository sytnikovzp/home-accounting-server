const { Router } = require('express');
// =====================================
const categoryController = require('../controllers/categoryController');

const categoryRouter = new Router();

categoryRouter
  .route('/')
  .get(categoryController.getAllCategories)
  .post(categoryController.createCategory)
  .put(categoryController.updateCategory);

categoryRouter
  .route('/:categoryId')
  .get(categoryController.getCategoryById)
  .delete(categoryController.deleteCategory);

module.exports = categoryRouter;
