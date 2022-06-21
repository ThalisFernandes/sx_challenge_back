const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const companyRoute = require('./routes/companyRoutes');
const employerRoutes = require('./routes/employerRoutes');
const cors = require('cors');

/**
 * I choose 8080 port because react use the port 3000 for default
 */
const port = 8080;
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
employerRoutes(app);
companyRoute(app);
app.get('/',(req, res)=>{
    res.status(200).send('Rodando')
});

app.listen(port,()=>{
    console.log('Rodando na porta 8080: http://localhost:8080');
})
