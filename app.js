const express = require('express');

// Controllers
const { globalErrorHandler } = require('./controllers/error.controller');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { productsRouter } = require('./routes/products.routes');
const { cartRouter } = require('./routes/cart.routes');
const { orderRouter } = require('./routes/orders.routes');

//Utils
const {AppError} =require('./util/appError.js');

// Init express app
const app = express();

// Enable incoming JSON data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/products', productsRouter);
app.use('/api/v1/cart', cartRouter);

app.use('*', (req, res, next) => {
    next(new AppError(404, `${req.originalUrl} not found in this server.`));
});

app.use(globalErrorHandler);

module.exports = { app };
