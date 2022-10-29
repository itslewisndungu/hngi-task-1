const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("short"));

app.get("/", (req, res) => {
  const response = {
    slackUsername: "lewiclancy",
    backend: true,
    age: 22,
    bio: "Let's build a better world through tech",
  };

  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
