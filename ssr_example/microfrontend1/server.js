const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/", (req, res) => {
      const page = "/";
      const params = { slug: req.params.slug };
      app.render(req, res, page, params);
    });

    server.listen(8081, (err) => {
      if (err) throw err;
      console.log("Listening on port 8081");
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
