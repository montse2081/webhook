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
		   const response = await fetch('http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhookPending', {
    		method: 'POST',
    		body: req.body, // string or object
    		headers: {
      			'Content-Type': 'application/json'
		}
		});
		  result = "pending";
		 // result = await response.json();;
  			//const myJson = await response.json(); //extract JSON from the http response
			//result = myJson.status;
		}	  
          // result = "pending";
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
