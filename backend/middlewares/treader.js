const User = require("../models/userModel");

const treader = async (ctx, next) => {
  try {
    const user = await User.findById(ctx.request.user);
    
    if (!user) {
      ctx.body = "cannot found user";
      ctx.status = 400;
    } else {
      if (user.role != "treader") {
        ctx.body = "unauthorized access!!";
        ctx.status = 401;
      } else {
        await next();
      }
    }
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

module.exports = treader;
