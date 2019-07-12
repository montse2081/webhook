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
		 
            result = "success";
            break;
        case "charge.pending":
		  $.ajax({
        url: "http://canaldigital.actinver.com.mx/appsBackPortalRest/WebHookController/webhookPending",
        method: "POST",
        data: req.body,
        dataType: 'json',
        contentType: "application/json",
         success: function(result,status,jqXHR ){
               result = "pending";
         },
         error(jqXHR, textStatus, errorThrown){
              result = "ERROR";
         }
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
  "reference": "mi-id-123"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
