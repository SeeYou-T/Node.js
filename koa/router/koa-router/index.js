const Router = require("koa-router");

const router = new Router();
const users = require("./users");
router
  .get("/", (ctx, next) => {
    ctx.body = "home";
  })
  .get(
    "/:id",
    async (ctx, next) => {
      ctx.body = ctx.request.params.id;
      const result = await next();
      console.log(result);
    },
    (ctx, next) => {
      return "hello";
    }
  )
  .use("/users", users.routes(), users.allowedMethods());

module.exports = router;
