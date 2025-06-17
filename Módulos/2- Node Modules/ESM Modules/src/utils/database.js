//FOCO ABAIXO de como exportar constantes
const databaseType = {
  userType: "admin",
  typeData: "datalocal",
};

async function connectToDatabase(dataBaseName) {
  console.log(`Conectado ao banco de dados: ${dataBaseName}`);
}

async function disconnectToDatabase(dataBaseName) {
  console.log(`Desconectando do banco de dados: ${dataBaseName}`);
}

//Faço do jeito abaixo caso eu queira exportar mais de uma coisa, seja função ou constante
export { connectToDatabase, disconnectToDatabase, databaseType };

//Faço do jeito abaixo caso eu queira exportar só uma coisa
// export default connectToDatabase;
