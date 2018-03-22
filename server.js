const express = require('express'),
      app = express();

function sayHello(request, response, next){
  console.log('I must be called');
  next();
}

app.get('/', sayHello, (request, response)=>{
  response.send('sayHello');
});

app.listen(3000, ()=>console.log('Express server started at port 3000'));
