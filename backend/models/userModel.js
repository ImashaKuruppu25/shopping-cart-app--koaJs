const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = new schema(
  {
    name: { type: String, required: true },
    address: {
      number: { type: Number, required: true },
      street: { type: String, required: true },
      city: { type: String, required: true },
    },
    phone: { type: Number, required: true },
    email: { type: String, unique: true, required: true },
    role: { type: String, required: true, default: "customer" },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
module.exports = User;
