const fs = require('fs');

const pathToDirectory = './assets/icons';

const categorieList = fs.readdirSync(pathToDirectory, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);





    console.log(categorieList);







console.log('Starting the API');

const app = require('express')()
module.exports = { path: '/api', handler: app }

app.get('/hello', (req, res) => {
  res.json({ data: 'Hello World' })
})