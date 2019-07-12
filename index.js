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
  var status ="";
	try{
  switch (charge){
      case "charge.success":
		 status = "success";
            result = "pagado";
            break;
        case "charge.pending":
		status = "pending";
		  const https = require('https')

const data = JSON.stringify({
  todo: 'Buy the milk'
})

const options = {
  hostname: 'flaviocopes.com',
  port: 443,
  path: '/todos',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
}

const req = https.request(options, (res) => {
	 result = res.statusCode;
  

  res.on('data', (d) => {
    process.stdout.write(d)
  })
})

req.on('error', (error) => {
	 result = error;
  
})

req.write(data)
req.end()
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

  "status": "success",
  "short_id": speech,
  "message": result,
  "reference": "mi-id-123"
  });
	
});


restService.listen(process.env.PORT || 8000, function() {
  console.log("Server up and listening");
});
