const express = require('express');

// Controller
const {
    getAllPurchases,
    getPurchaseById
} = require('../controllers/order.controller.js');

// Middlewares
const { validateSession } = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(validateSession);

router
  .route('/')
  .get(getAllPurchases)

router
  .route('/:id')
  .get(getPurchaseById)

module.exports = { orderRouter: router };
