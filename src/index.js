/* eslint-disable no-undef */
require("dotenv").config();
const express = require('express');
const cors = require('cors');
const logger = require("morgan");
const routes = require('./routes');
const { PORT } = require('./config/variables');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());
app.use(require("cookie-parser")());
app.use(logger("dev"));
require("./config/db");
app.use("/v1", routes);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
