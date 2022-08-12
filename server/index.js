const path = require('path')
const express = require("express");
const cors = require("cors"); 
const app = express();

app.use(express.static(path.join(__dirname, "./../public")));
app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'../public/home.html'))
})
app.get('/node_modules/axios/dist/axios.min.js', function(req, res){
    res.sendFile(path.join(__dirname, '../node_modules/axios/dist/axios.min.js'))
})


app.use(cors());

app.use(express.json());

const { getDestination, getPlaces, alreadyVisited } = require('./controller')

app.get("/api/destination", getDestination);
app.get(`/api/places`, getPlaces);
app.delete(`/api/remove`, alreadyVisited);


app.listen(4444, () => console.log("Server running on 4444"));
