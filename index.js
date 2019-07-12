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
   req.body.short_id;
  var charge = req.body.type;
  var result = req.body.id;
	//var Request = require("request");
  switch (charge){
      case "charge.success": 
            result = "success";
            break;
        case "charge.pending":
		  $.ajax({
		url: 'http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhook',
		dataType: 'JSON',
		type: 'POST',
		data: req.body
	}).done(function(returnData){
		 result = "pending";
	}).fail(function(event){
	result = "ERROR";
	});  
           //result = "pending";
            break;
        case "charge.expired":
            result = "expirado";
            break;
      default:
      result = "en espera";
  }
  
  return res.json({
  "status": "success",
  "short_id": speech,
  "message": result,
  "reference": "mi-id-PRUEBA"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
