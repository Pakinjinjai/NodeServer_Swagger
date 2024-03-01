// swaggerOptions.js
module.exports = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Informations Engineering API",
        version: "1.0.0",
        description: "API Documentation for User API",
      },
      servers: [{ url: "http://localhost:3000/api/v1" }],
    },
    apis: ["./routes/*.js"],
  };
