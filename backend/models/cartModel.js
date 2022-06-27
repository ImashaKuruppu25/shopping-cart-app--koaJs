const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema(
  {
    itemCode: { type: String, required: true },
    itemName: { type: String, required: true },
    itemDecs: { type: String, required: false },
    itemPrice: { type: Number, required: true },
    itemQty: { type: Number, required: true },
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
