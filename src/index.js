const morgan = require("morgan");
const express = require("express");
const connected = require("./database");
const cors = require("cors");
const initialSetup = require("./libs/initialSetup");
const logger = require("./logger/index");

/*set up*/
const app = express();
initialSetup.createRoles();

/*database*/
connected();

/*Middlewares*/
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

/*Routes*/
app.use("/auth", require("./routes/auth-routes"));
app.use("/task", require("./routes/task-routes"));

/*setting*/
require("dotenv").config();
const port = process.env.PORT;

app.listen(port, () => {
  logger.info(`Connected on port: ${port}`);
});
