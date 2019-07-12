"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

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
		 
            result = "pagado";
            break;
        case "charge.pending":
		const data = JSON.stringify({
  todo: 'Buy the milk'
});
		  
		  
		  
		  
		  
     
            result = data.todo;//   "charge.pending";
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
  "reference": "mi-id-123"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
