"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');



restService.use(
  bodyParser.urlencoded({
    extended: true
  })
);

restService.use(bodyParser.json());

restService.post("/echo", function(req, res) {
  console.log("iniciando server");
  var speech =
   req.body.short_id;
  var charge = req.body.type;
  var result = req.body.id;
  var status ="";
	try{
  switch (charge){
      case "charge.success":
		 status = "success";
            result = "pagado";
            break;
        case "charge.pending":
		status = "pending";
		

const data = JSON.stringify({
  todo: "Buy the milk"
});
result = "Buy ";


            //result = "pending";
            break;
        case "charge.expired":
		status = "expired";
            result = "expirado";
            break;
      default:
      result = "en espera";
		  status = "error";
  }
  }catch(e){
	  result = e;
		  status = e;
  }
  return res.json({

  "status": status,
  "short_id": speech,
  "message": result,
  "reference": "mi-id-123"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
