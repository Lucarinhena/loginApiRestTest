const fs = require("fs");
const path = require("path");

fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro", error);
  }
  console.log("Pasta criada com sucesso!");
});

fs.writeFile(
  path.join(__dirname, "/test", "test.html"),
  "Hello World",
  (error) => {
    if (error) {
      return console.log("erro", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

fs.appendFile(
  path.join(__dirname, "/test", "test.html"),
  "hello node",
  (error) => {
    if (error) {
      //   return console.log("Erro", error);
    }
    console.log("Arquivos modificado com sucesso");
  }
);

fs.readFile(
  path.join(__dirname, "/test", "test.html"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("ERRO: ", error);
    }
    console.log(data);
  }
);
