import express  from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import cors from 'cors'
// import DB_URL from './env'


import Routes from './router/routes.js'
import  Connection  from  './database/db_Connection.js'

const app =express();
dotenv.config();


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const APP_PORT=5000;


app.use('/',Routes);


app.listen(APP_PORT,()=>{
    console.log(` app listening on port ${APP_PORT}`)
})