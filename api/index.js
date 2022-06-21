const fs = require("fs");

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

      console.log(countrie, categorie, iconFolder);

      results.push({
        country: countrie,
        categorie: categorie,
        icon: iconFolder,
      });
    });
  });
}

const app = require("express")();
module.exports = { path: "/api", handler: app };

console.log(results);

app.get("/categories", (req, res) => {
  res.json({ datas: results });
});
