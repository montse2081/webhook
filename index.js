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
  var status = "";
	//var Request = require("request");
	try{
		switch (charge){
      case "charge.success": 
            result = "success";
				status = "success";
            break;
        case "charge.pending":
				status = "pending";
				const request = require('request');
				
				request('http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhook', 
					{ json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
 result =err;
});
				
		 
           //result = "pending";
            break;
        case "charge.expired":
				status = "expired";
            result = "expirado";
            break;
      default:
      result = "en espera";
  }
	}
	catch(e){
		result=e;
	}
  
  
  return res.json({
  "status": status,
  "short_id": speech,
  "message": result,
  "reference": "mi-id-PRUEBA"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
