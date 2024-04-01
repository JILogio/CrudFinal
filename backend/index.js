import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import playersRoute from './routes/playersRoute.js';
import cors from 'cors';

const app = express();

app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());




app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hola bebe')
});


app.use('/players', playersRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to dababase');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });