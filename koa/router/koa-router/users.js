const Router = require("koa-router");

const router = new Router({
  prefix: "/abc",
});
router.get("/signin", (ctx, next) => {
  ctx.body = "signin";
});

module.exports = router;
