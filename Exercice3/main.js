const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("Le fichier a été enregistré !");
});

fs.readFile("welcome.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
