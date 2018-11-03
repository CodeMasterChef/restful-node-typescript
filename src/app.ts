import express = require("express");
import { hi, awesome } from "./controllers/status.controller";

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
app.set("address", process.env.ADDRESS || 'localhost');

// API Endpoints
app.get('/', (req, res) => {
    res.send("Hello world")   
})

app.get('/hi', hi);
app.get('/awesome' , awesome);

// export our app
export default app;