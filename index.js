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
  switch (charge){
      case "charge.success":
      $.ajax({
		url: 'http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhook',
		dataType: 'JSON',
		type: 'POST',
		data: objFirst
	}).done(function(returnData){
		result = returnData;
	
		
	}).fail(function(event){
	result = "ERROR";
	});
      
      
      
          //  result = "pagado";
            break;
        case "charge.pending":
      $.ajax({
		url: 'http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhook',
		dataType: 'JSON',
		type: 'POST',
		data: objFirst
	}).done(function(returnData){
		result = returnData;
	
		
	}).fail(function(event){
	result = "ERROR";
	});
     //       result = "pendiente";
            break;
        case "charge.expired":
      $.ajax({
		url: 'http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhook',
		dataType: 'JSON',
		type: 'POST',
		data: objFirst
	}).done(function(returnData){
		result = returnData;
	
		
	}).fail(function(event){
	result = "ERROR";
	});
     //       result = "expirado";
            break;
     // default:
     // result = "en espera";
  }
  
  return res.json(result);
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
