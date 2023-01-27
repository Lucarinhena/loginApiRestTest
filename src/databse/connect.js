const mongoose = require("mongoose");

const connectToDataBase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejs.yjh3mjd.mongodb.net/database?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o Banco de Dados:",
          error
        );
      }
      return console.log("Conexão com o Banco de Dados bem sucedida");
    }
  );
};

module.exports = connectToDataBase
