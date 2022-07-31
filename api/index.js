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
      console.log(files),'files';
     const variants = []

     files.forEach((file) => {
        const variant = file.split("_")[1].split(".")[0];
        if (!variants.includes(variant)) {
            variants.push(variant);
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
module.exports = { path: "/api", handler: app };

console.log(results);

app.get("/categories", (req, res) => {
  res.json({ datas: results });
});


//country -> categorie -> icon -> file_folder -> (variant_1,variant_2,variant_3)
//sur la duree le projet sera lourd
// donc les gens auront des difficulte a cloner le projet