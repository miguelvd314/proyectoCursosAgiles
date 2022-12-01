const express = require('express');
const mongoose = require('mongoose');
require ("dotenv").config();
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use('/api', userRoutes);



//routers rutas
app.get("/", (req, res)=>{
    res.send("Bienvenidos a la API");
});

//mongodb conection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log("Conectado a mongodb atlas"))
.catch((error)=> console.error(error));


app.listen(port, () => console.log('servidor esta funcionando', port));
