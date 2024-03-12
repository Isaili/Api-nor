import mongoose from "mongoose";
import dotenv from "dotenv/config"

const atlasUri = process.env.URI;

mongoose.connect(atlasUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log ('Conexión exitosa a MongoDB Atlas'))
.catch(error => console.log('Error de conexión a MongoDB Atlas:',error))