import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import { errorHandler, notFound } from "./Middware/Error.js";
import ImportData from './ImportData.js';
import userRoute from "./Routes/UserRoute.js";
import jobRoute from "./Routes/JobRoute.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
   
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Request-Headers','Content-Type, X-Auth-Token, Authorization, Origin');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  
    res.setHeader('Access-Control-Allow-Headers', "*");
    // Pass to next layer of middleware
    next();
});

app.use("/api/import", ImportData);
app.use("/api/user", userRoute);
app.use("/api/job", jobRoute);
app.use(notFound);
app.use(errorHandler);  


const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`sever running at port: ${PORT} `));   