const userRoute = require("./users");

module.exports = (app) => {
  app.use("/api/v1/users", userRoute);
};
