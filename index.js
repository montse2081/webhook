"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  console.log("iniciando server");
  var speech =
   req.body;
  console.log(speech);
  return res.json({

  "status": "success",
  "short_id": "ok",
  "message": "OK",
  "reference": "mi-id-123"
  });
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
