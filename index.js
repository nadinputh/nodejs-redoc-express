const express = require("express");
const redoc = require("redoc-express");

const app = express();
const port = 3000;

// serve swagger.json file
app.get("/docs/swagger.yaml", (req, res) => {
  res.sendFile("swagger.yaml", { root: "." });
});

// serve redoc
app.get(
  "/docs",
  redoc({
    title: "API Docs",
    specUrl: "/docs/swagger.yaml",
  })
);

app.listen(port, () => console.log(`Express app listening on port ${port}!`));
