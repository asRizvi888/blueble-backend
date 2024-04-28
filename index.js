require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");

const auth = require("./src/service/auth");

const app = express();
const port = 8080;

// connect to DB
connectDB();

app.use(express.json());

app.use(
  cors({
    origin: "*",
  }),
);

// routes
app.get("/", (_, res) => {
  res.send(
    '<center><h1>Hello World👋 <a href="https://blueble.live">@blueble.live</a></h1></center>',
  );
});

app.use("/api/auth", auth);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
