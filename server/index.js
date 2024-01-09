import express from "express";
//import { PORT } from "./config.js";
//import config from "./config.js";
import './database/db.js';
import cors from 'cors';

import carteraRoutes from './routes/cartera.routes.js'
const PORT = 4000;
const app=express();
//settings
app.listen(PORT)
console.log(`Aqui iniciandono el servidor esta corriendo ${PORT}`)

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false}));


app.use(carteraRoutes)

// Printing process.traceDeprecation property value
//console.log(process.traceDeprecation);