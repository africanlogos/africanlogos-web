const express = require("express");

const cors = require("cors");

const fs = require('fs');

const pathToDirectory = '../assets/icons';

let results = {}

const categories = fs.readdirSync(pathToDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);


    for (const categorie of categories) {
         const dir = pathToDirectory + '/' + categorie;
         try {
            const files = fs.readdirSync(dir);
            results[categorie] = files
        } catch (err) {
            console.log(err);
        }
    }




const server = express();
    server.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", '*');
      res.header("Access-Control-Allow-Credentials", true);
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
      next();
  });
  
    server.use(
      cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
      })
    );

    server.options(
      '*',
      cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
      })
    );



    server.use(express.json());

    server.use(express.urlencoded({ extended: true }));  


    server.get('/categories', (req, res) => {
        res.json({ datas: categories,results })
    })


    server.listen(process.env.PORT || 5000, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Ready on ${process.env.PORT}`);
    });


