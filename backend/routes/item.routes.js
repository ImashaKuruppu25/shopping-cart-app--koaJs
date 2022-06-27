const Koarouter = require("koa-router");
const { addItem, getItems, updateItem } = require("../api/item.api");
const auth = require("../middlewares/auth");
const treader = require("../middlewares/treader");
const itemRoute = new Koarouter({ prefix: "/item" });

itemRoute.post("/addItem", auth, treader, addItem);
itemRoute.get("/getItems", getItems);
itemRoute.put("/updateItem/:id", auth, treader, updateItem);

module.exports = itemRoute;
