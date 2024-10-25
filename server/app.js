import express from 'express'
import mongoose, {mongo} from 'mogoose'
const mongose = require ('mongoose');
const cors = require ('cors');


const app = express()
dotenv.config()
app.use(express.json())

const port = process.env.PORT;

// CORS configuration
const corsOptions = {
    origin: ["http://localhost:3000"],
    Credential: true,

};
app.use (cors(corsOptions));


//Routes
const studentRoute = require ('./routes/studentRoute.js');

//API's
app.use('/api/student', studentRoute);


// Establishing Connection
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGOODB)
    }catch (error){
        console.log(error);
    }

}

mongoose.connect.on('disconnected', () =>{
    console.log('disconnected from MongoDB')
})

mongoose.connect.on('connected', () =>{
    console.log('Connected from MongoDB');
})


app.listen(8000, () =>{    
    console .log(`Connected to PORT ${port}`);
})