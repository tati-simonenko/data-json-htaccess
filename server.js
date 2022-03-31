app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "https://null.jsbin.com");
  next();
});