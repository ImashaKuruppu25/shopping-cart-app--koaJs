const Cart = require("../models/cartModel");
require("dotenv").config();

let message, status;

const addToCart = async (ctx) => {
  try {
    const userId = ctx.request.user._id;
    const { items } = ctx.request.body;

    const exUser = await Cart.findOne({ userId });

    if (!exUser) {
      const newCart = new Cart({
        userId: userId,
        items: items,
      });
      await newCart.save();
      message = { msg: "Item added to the cart!", newCart };
      status = 200;
    } else {
      const updateCart = await Cart.findByIdAndUpdate(exUser._id, {
        items: items,
      });
      message = { msg: "cart updated!" };
      status = 200;
    }
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const viewCart = async (ctx) => {
  try {
    const userId = ctx.request.user._id;

    const exUser = await Cart.findOne({ userId });

    if (!exUser) {
      message = "no item in cart!";
      status = 400;
    } else {
      const cart = await Cart.find();
      message = cart;
      status = 200;
    }
  } catch (error) {
    message = error;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

module.exports = { addToCart, viewCart };
