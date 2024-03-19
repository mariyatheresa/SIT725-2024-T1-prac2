const express = require('express');
const app = express();
const port = 3300;

//app.use(express.json());

app.get('/addTwoNumbers', (req,res) => {
    const n1 = Number(req.query.n1)
    const n2 = Number(req.query.n2)
    res.send({"data": n1 + n2,
    "message": "success",
    "statuscode": 200
    
})

});

app.listen(port, () => {
    console.log('Server is listening at 3300');
  });