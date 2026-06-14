const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const publicDir = __dirname;

app.use(express.static(publicDir, {
  extensions: ["html"]
}));

app.get("/demo", (_req, res) => {
  res.redirect("/demo/");
});

app.get("*", (_req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.listen(port, () => {
  console.log(`NexoComunidad disponible en puerto ${port}`);
});
