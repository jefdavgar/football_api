const swaggerJSDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")
const path = require("path")

const options = {
  definition:{
    openapi: "3.0.0",
    info: {title:"Api con información futbolistica", version: "1.0.0"},
  },
  apis:[`${path.join(__dirname, "./routes/*.js")}`]
};

const swaggerSpec = swaggerJSDoc(options)

exports.swaggerDocs = (app, port)=>{
  app.use("/v1/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  app.get("/v1/api/docs.json", (req, res)=>{
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec)
  });
  console.log(`Version 1 Docs are avaliable at http://localhost:${port}/v1/api/docs`)
}
