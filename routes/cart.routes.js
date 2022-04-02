const express = require('express');

// Controller
const {
  addProductToCart,
  getUserCart,
  updateCartProduct,
  removeProductFromCart,
  purchaseCart
} = require('../controllers/cart.controller');

// Middleware
const { validateSession } = require('../middlewares/auth.middleware');
const {
  addProductToCartValidation,
  validateResult
} = require('../middlewares/validators.middleware');

const {checkProductQuantity} = require('../middlewares/products.middleware.js');

const router = express.Router();

router.use(validateSession);

router.get('/', getUserCart);

router.post(
  '/add-product',
  addProductToCartValidation,
  validateResult,
  checkProductQuantity,
  addProductToCart
);

router.patch('/update-product', checkProductQuantity, updateCartProduct);

router.post('/purchase', purchaseCart);

router.delete('/:productId', removeProductFromCart);

module.exports = { cartRouter: router };
