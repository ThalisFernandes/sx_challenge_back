const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host:"localhost",
        user:"YourUserName",
        password:"YourPassWord",
        database: 'sx_challenge'
    }
);

 async function inserEmployer(req){
    let insertValues = Object.keys(req.body).map((x)=> req.body[x])
    try {
        let query = "INSERT INTO employer(cpf, nome, email, telefone, endereco, empresa) VALUES(?,?,?,?,?,?)"
       return await connection.query(query, [...insertValues],(err, result)=> result.affectedRows > 0);
    } catch (error) {
        return false
    }
}

const employerRoutes = (app)=>{
    app.route('/employer/:company?')
    .get(async (req, res)=>{
        let company = req.params['company'] ? req.params['company']: null;
        let getEmployer = company !== null 
            ? `SELECT * FROM employer WHERE empresa ='${company}'`
            : 'SELECT * FROM employer';
        connection.query(getEmployer, (err, result)=>{
            result.length > 0 ? res.status(200).json({message:"Sucesso", result:result})
            : res.status(400).json({message:"Sucesso", result:result});
        });
    })
    .post(async (req, res)=>{
        const result = await inserEmployer(req);
        result 
        ? res.status(200).send({message:"Sucesso"})
        : res.status(400).send({message:"Erro"});
    })
    .put((req, res)=>{})
    .delete((req, res)=>{})
}



module.exports = employerRoutes

