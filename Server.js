// Server.js
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
require("./configs/Database");
const routes = require("./routes/routes");
const swaggerOptions = require("./swaggerOptions");

const main = async () => {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const port = 3000;

  routes(app);

  const specs = swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
  });
};

main().catch((e) => console.error(e));
