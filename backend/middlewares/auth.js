const pkg = require("jsonwebtoken");
const { verify } = pkg;
require("dotenv").config();

const auth = async (ctx, next) => {
  try {
    const token = await ctx.get("Authorization");
    if (!token) {
      ctx.body = "connot found token!!";
      ctx.status = 400;
    }
    await verify(token, process.env.TOKEN, async (err, user) => {
      if (err) {
        ctx.body = { msg: "invalide authuntication!!", err };
        ctx.status = 400;
      }
      ctx.request.user = user;
      await next();
    });
  } catch (error) {
    ctx.body = error;
    ctx.status = 500;
  }
};

module.exports = auth;
