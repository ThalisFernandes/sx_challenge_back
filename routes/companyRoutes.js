const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host:"localhost",
        user:"YourUserName",
        password:"YourPassWord",
        database: 'sx_challenge'
    }
);

 async function insertCompany(req){
    let insertValues = Object.keys(req.body).map((x)=> req.body[x])
    
    try {
        let query = "INSERT INTO companies(nome, cnpj, email, telefone,endereco) VALUES(?,?,?,?,?)"
       return await connection.query(query, [...insertValues],(err, result)=> result?.affectedRows > 0);
    } catch (error) {
        return false
    }
}

const companyRoute= (app)=>{
    app.route('/companies/:id?')
    .get(async (req, res)=>{
        let id = req.params['id'] ? req.params['id']: null;
        let getCompany = id !== null 
            ? `SELECT * FROM companies WHERE codigo = ${id}`
            : 'SELECT * FROM companies';
        connection.query(getCompany, (err, result)=>{
            result.length > 0 ? res.status(200).send({message:"Sucesso", result:result})
            : res.status(400).send({message:"Erro", result:result});
        });
    })
    .post(async (req, res)=>{
       const result = await insertCompany(req);
       console.log(result);
       result 
       ? res.status(200).send({message:"Sucesso"})
       : res.status(400).send({message:"Error"});
    })
    .put((req, res)=>{})
    .delete((req, res)=>{})
}



module.exports = companyRoute

