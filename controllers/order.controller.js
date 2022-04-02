// models
const {Order} = require('../models/order.model');

// Utils
const { catchAsync } = require('../util/catchAsync');
const { AppError } = require('../util/appError');

exports.getAllPurchases = catchAsync(async (req, res, next) => {

  const { currentUser } = req; 

    const orders = await Order.findAll({
        where: { 
            status: 'active',
            userId: currentUser.id
        }
      });
    
      res.status(200).json({
        status: 'success',
        data: { orders }
      });
    
});

exports.getPurchaseById = catchAsync(async (req, res, next) => {

  const { currentUser } = req; 

  const { id } = req.params; 

  const order = await Order.findOne({
        where: { 
          status: 'active',
          userId: currentUser.id,
          id:id
      }
      });

      res.status(200).json({
      status: 'success',
      data: { order }
});

});