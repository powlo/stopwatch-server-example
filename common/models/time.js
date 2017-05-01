module.exports = function(Time) {
  'use strict';
  Time.beforeRemote('create', function(ctx, modelInstance, next) {
    ctx.args.data.userId = ctx.req.accessToken.userId;
    next();
  });
};
