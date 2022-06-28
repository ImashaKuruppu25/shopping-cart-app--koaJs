const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [
      {
        itemCode: String,
        itemName: String,
        itemQty: Number,
        itemPrice: Number,
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
