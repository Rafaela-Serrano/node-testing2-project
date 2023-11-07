const express = require('express');
const model = require('./colors_model');

const server = express();

server.use(express.json());

server.get("/colors",(req,res)=>{
    model.getAll()
    .then(colors => {
      res.status(200).json(colors);
    })
    .catch(error => {
      res.status(500).json(error);
    })
  });

server.get("/colors/:id",async(req, res) => {
    const color = await model.getById(req.params.id);
    if (!color) {
      res.status(404);
    } else {
      res.status(200).json(color);
    }
  });

module.exports = server ;