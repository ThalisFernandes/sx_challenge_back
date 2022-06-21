# sx_challenge_back

### Install: 
 Run `npm install` to install all packages and dependecies from project;
 
### Create database:
on your own machine run or copy the content from database.sql and run the commands to create the database and tables;


### Running the API application:

  you can use `ǹodemon app.js` or `ǹode app.js` I strongly recomend use nodemon, but u can choose.

## setup node to connect with Mysql
 inside the employerRoutes.js and companyRoutes.js, you can change the connection
 `{
        host:"localhost",
        user:"YourUserName",
        password:"YourPassWord",
        database: 'sx_challenge'
    }`
    there u can set your mysql configuration;
  
### Request from insomnia and postman:

 use the url `http://localhost:8080` as react uses the `3000` port,
 
 `/companies` is used to show all companies
  `GET` on companies will show all companies stored in database, you can pass a company id or "codigo" to get a specific company `/companies/:id?`;
  `POST` here you can Create new companies, send in via insomnia using the form URL encoder option to set the body;
  
  `/employer` is used to show all employers
    `GET` on employers you can retrieve all employers stored in database, the company name can be used in url to get only the employers of the same company `/employer/:company?`
     `POST` here you can Create new employers, send in via insomnia using the form URL encoder option to set the body;
  
  
