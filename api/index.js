const fs = require('fs');

const pathToDirectory = './assets/icons';

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


    const app = require('express')()
    module.exports = { path: '/api', handler: app }

    app.get('/categories', (req, res) => {
     res.json({ datas: categories,results })
    })