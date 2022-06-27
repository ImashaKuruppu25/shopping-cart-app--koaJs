const Koarouter = require("koa-router");
const {
  register,
  login,
  getMyProfile,
  getAllUsers,
} = require("../api/user.api");
const auth = require("../middlewares/auth");
const treader = require("../middlewares/treader");

const userRoute = new Koarouter({ prefix: "/user" });

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/myProfile", auth, getMyProfile);
userRoute.get("/getAll",auth, treader, getAllUsers);

module.exports = userRoute;
