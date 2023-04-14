
// Basic Calculator API
// Performs addition, subtraction, multiplication and division of the two parameters passed n1 and n2. 

const express= require("express");
const { status } = require("express/lib/response");
const res = require("express/lib/response");
const app= express();

// additon 
app.get('/add/:n1/:n2',(req,res)=>{

    try {
        
        const num1  = parseFloat(req.params.n1);
        const num2 = parseFloat(req.params.n2);

        if (    isNaN(num1)|| isNaN(num2) ) {
           return res.status(400).json({error: 'INPUT NOT VALID! Please input valid numbers' });
        }

        const result = num1 + num2;
        res.status(200).json({result});

    } catch (error) {
        console.log(error);
      res.send(500).json({statuscode:500, msg : error.toString() });  
    }

});


//subtraction 

app.get('/subtract/:n1/:n2',(req,res)=>{

    try {
        
        const num1  = parseFloat(req.params.n1);
        const num2 = parseFloat(req.params.n2);

        if (    isNaN(num1)|| isNaN(num2) ) {
           return res.status(400).json({error: 'INPUT NOT VALID! Please input valid numbers' });
        }

        const result = num1 - num2;
        res.status(200).json({result});

    } catch (error) {
        console.log(error);
      res.send(500).json({statuscode:500, msg : error.toString() });  
    }

});

//multiplication

app.get('/multiply/:n1/:n2',(req,res)=>{

    try {
        
        const num1  = parseFloat(req.params.n1);
        const num2 = parseFloat(req.params.n2);

        if (    isNaN(num1)|| isNaN(num2) ) {
           return res.status(400).json({error: 'INPUT NOT VALID! Please input valid numbers' });
        }

        const result = num1*num2;
        res.status(200).json({result});

    } catch (error) {
        console.log(error);
      res.send(500).json({statuscode:500, msg : error.toString() });  
    }

});


app.get('/divide/:n1/:n2',(req,res)=>{

    try {
        
        const num1  = parseFloat(req.params.n1);
        const num2 = parseFloat(req.params.n2);

        if (    isNaN(num1)|| isNaN(num2) ) {
           return res.status(400).json({error: 'INPUT NOT VALID! Please input valid numbers' });
        }

        if (num2 == 0 ) {
            return res.status(400).json({msg:'n2 cannot be 0. Please input any other number'} );
        }

        const result = num1/num2;
        res.status(200).json({result});

    } catch (error) {
        console.log(error);
      res.send(500).json({statuscode:500, msg : error.toString() });  
    }

});







const port =3000;
app.listen(port,()=>{

    console.log("app is listnening on port "+port);
});



