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
	var request = require('request'),  
        var jsdom = require('jsdom');
	//var Request = require("request");
	try{
		switch (charge){
      case "charge.success": 
            result = "success";
				status = "success";
            break;
        case "charge.pending":
				request({ uri:'http://www.google.com' }, function (error, response, body) {  
  if (error && response.statusCode !== 200) {
	  result = "Error when contacting google.com";
   
  }

  jsdom.env({
    html: body,
    scripts: [
      'http://code.jquery.com/jquery-1.5.min.js'
    ]
  }, function (err, window) {
    var $ = window.jQuery;
result = "body";
    // jQuery is now loaded on the jsdom window created from 'agent.body'
  
  });
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
