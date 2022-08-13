const fs = require("fs");
const bodyParser = require('body-parser')
const pathToDirectory = "./assets/icons";

let results = [];

// country,icon,categorie

function readFolderInFolder(path) {
  return fs
    .readdirSync(path, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);
}

const countries = readFolderInFolder(pathToDirectory);
for (const countrie of countries) {
  const dir = pathToDirectory + "/" + countrie;
  const categorie = readFolderInFolder(dir);

  categorie.forEach((categorie) => {
    const path = dir + "/" + categorie;
    const iconFolders = readFolderInFolder(path);


    iconFolders.forEach((iconFolder) => {
      const path = dir + "/" + categorie + "/" + iconFolder;

      const files = fs.readdirSync(path);
      console.log(files),'files';
     const variants = []

     files.forEach((file) => {
        let numberOfvariant = (file.split("variant")[1]).split(".")[0];
        if (!variants.includes(numberOfvariant)) {
            variants.push(`variant${numberOfvariant}`);
        }
     })



      console.log(countrie, categorie, iconFolder);

      results.push({
        country: countrie,
        categorie: categorie,
        icon: iconFolder,
        variants
      });
      
     


    });
  });
}

const app = require("express")();
app.use(bodyParser.json())


app.all("/categories", (req, res) => {
  res.json({ datas: results });
});

module.exports = app;