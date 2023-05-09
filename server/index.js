import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
import helmet, { crossOriginResourcePolicy } from "helmet";
import morgan from "morgan";
import { Configuration, OpenAIApi } from "openai";
import openaiRoutes from "./routes/openai.js"

/* CONFIGURATIONS */



dotenv.config()
const app =express();
app.use(express).json;
app.use(helmet());
app.use(helmet,crossOriginResourcePolicy({ policy : "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true }))
app.use(cors())


/* OPENAI CONFIGURATIONS */ 
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

  export const openai = new OpenAIApi(configuration);


/* ROUTES */
app.use('/openai', openaiRoutes);

/* SERVER SETUP */
const PORT = process.env.PORT || 9000;

// app.listen(PORT, ()=>{
//     console.log("App listenting on port " + PORT);
// })
server.listen(5173, 'localhost'); 
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});