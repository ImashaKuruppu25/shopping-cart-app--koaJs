const Koarouter = require("koa-router");
const {
  register,
  login,
  getMyProfile,
  getAllUsers,
} = require("../api/user.api");
const auth = require("../middlewares/auth");

const userRoute = new Koarouter({ prefix: "/user" });

userRoute.post("/register", register);
userRoute.post("/login", login);
userRoute.get("/myProfile", auth, getMyProfile);
userRoute.get("/getAll", getAllUsers);

module.exports = userRoute;
