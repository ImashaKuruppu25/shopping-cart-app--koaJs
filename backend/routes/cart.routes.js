const Koarouter = require("koa-router");
const auth = require("../middlewares/auth");
const { addToCart, viewCart } = require("../api/cart.api");

const cartRoute = new Koarouter({ prefix: "/cart" });

cartRoute.post("/addToCart", auth, addToCart);
cartRoute.get("/getCart", auth, viewCart);

module.exports = cartRoute;
