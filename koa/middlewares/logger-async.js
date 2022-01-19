function log(ctx) {
  console.log(ctx.methods, ctx.header.host);
}

async function logger(ctx, next) {
  log(ctx);
  await next();
}

module.exports = {
  logger,
};
