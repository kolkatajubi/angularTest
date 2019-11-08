const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("app"));

const ipaddress = "127.0.0.1";
const port = 1050;

app.listen(port, ipaddress, () =>
  console.log(`Listening at ${ipaddress}:${port}...`)
);
