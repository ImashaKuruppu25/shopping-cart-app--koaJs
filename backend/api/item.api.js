const Item = require("../models/itemModel");
require("dotenv").config();

let message, status;

const addItem = async (ctx) => {
  try {
    const item = ctx.request.body;
    const { itemCode, itemName, itemDecs, itemPrice, itemQty } = item;

    if (!itemQty || !itemPrice || !itemDecs || !itemName || !itemCode) {
      message = "please fill all fields!!";
      status = 400;
    } else {
      const newItem = new Item({
        itemCode,
        itemName,
        itemDecs,
        itemPrice,
        itemQty,
      });

      await newItem.save();
      message = { meg: "item added!", newItem };
      status = 200;
    }
  } catch (error) {
    message = error;
    status = 500;
  }

  ctx.body = message;
  ctx.status = status;
};

const getItems = async (ctx) => {
  try {
    const items = await Item.find();
    message = items;
    status = 200;
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

const updateItem = async (ctx) => {
  try {
    const itemId = ctx.request.params;
    const item = ctx.request.body;
    const { itemName, itemDecs, itemPrice, itemQty } = item;
    // console.log(itemId.id);
    if (!itemId) {
      message = "cannot find item!";
      status = 400;
    } else {
      await Item.findByIdAndUpdate(
        itemId.id,
        {
          itemName: itemName,
          itemDecs: itemDecs,
          itemPrice: itemPrice,
          itemQty: itemQty,
        },
        (err, result) => {
          if (err) {
            message = err;
            status = 400;
          } else {
            message = { msg: "Item Updated!", result };
            status = 200;
          }
        }
      );
    }
  } catch (error) {
    message = error;
    status = 500;
  }
  ctx.body = message;
  ctx.status = status;
};

module.exports = { addItem, getItems, updateItem };
