const Koa = require("koa");
const koa = new Koa();
const router = require("./router/koa-router/index");
// const { logger } = require("./middlewares/logger-async");

// koa.use(logger);

// koa.use((context, next) => {
//   //   console.log(context);
//   context.body = "hahaha";
// });
// require("./router/pure/index");

koa.use(router.routes()).use(router.allowedMethods());

koa.listen(3030);
