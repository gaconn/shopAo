const userRouter = require("./user.js");
const productRouter = require("./product.js");
function route(app) {
    app.use("/user", userRouter);
    app.use("/product", productRouter);
}

module.exports = route;
