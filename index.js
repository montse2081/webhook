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
	const axios = require('axios')
	
	axios.post('https://flaviocopes.com/todos', {
  todo: 'Buy the milk'
})
.then((res) => {
		result = res.statusCode;
  
})
.catch((error) => {
		result = error;
 
})
 
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
